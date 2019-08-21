import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';

/**
 * This class handles much of the front-end's logic concerning how it manages the tasks it recveives from the back-end.
 */

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

	tasks: Task[];
	filteredTasks: Task[];
	radioButton: string;
	radioButtons: string[] = ['COMPLETED', 'OVERDUE', 'URGENT', 'OK', 'NONE'];
	
	constructor(private taskService: TaskService) { }

	ngOnInit() {
		this.radioButton = "NONE";
		this.fetchData();
	}
	
	//Note: This method massages the list of Tasks received from the back-end into being more UI friendly.
	fetchData() {
		this.taskService.findAll().subscribe(
			data => {
				this.tasks = data;
				//Note: Since status is an entirely front-end Task field, it is assigned shortly after receiving all the Tasks from the back-end.
				this.tasks.forEach(
					task => {this.setStatus(task);}
				);
				console.log(this.tasks);
				this.filteredTasks = this.tasks.filter(
					task => {
						if ((this.radioButton == "NONE") || (task.status == this.radioButton )){return task;};}
				);
				console.log(this.filteredTasks);
			}
		);
	}
	
	complete(id: string){
		this.taskService.complete(id).subscribe(
			() => {this.fetchData();}
		);
	}
	
	remove(id: string){
		this.taskService.remove(id).subscribe(
			() => {this.fetchData();}
		);
	}
	
	setStatus(task: Task){
		var currentDate = new Date().valueOf();
		var deadlineDate = new Date(task.deadline).valueOf();
		if (task.isCompleted){
			task.status = "COMPLETED";
		}else if(currentDate > deadlineDate){
			task.status = "OVERDUE";
		//Note: 172800000 is 2 days in milliseconds.
		}else if(deadlineDate - currentDate < 172800000){
			task.status = "URGENT";
		}else{
			task.status = "OK";
		}
	}
}

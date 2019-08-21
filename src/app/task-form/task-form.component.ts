import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';
import { Task } from '../model/task';
import { NgForm } from '@angular/forms';

/**
 * Provides funtionality to the task-form page.
 */

@Component({
	selector: 'app-task-form',
	templateUrl: './task-form.component.html',
	styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

	task: Task;

	constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {
		this.task = new Task();
	}

	//This method probably requires improved error handling as it is the only method capable of throwing an unexpected error on the front-end.
	onSubmit() {
		this.taskService.save(this.task).subscribe(
			result => {this.gotoTaskList()}
		);
	}

	gotoTaskList() {
		this.router.navigate(['/tasks']);
	}
}

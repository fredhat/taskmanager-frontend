import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

/**
 * TaskService provides all the necessary methods for interfacing with the back-end endpoints.
 */

@Injectable()
export class TaskService {

	private taskUrl: string;

	constructor(private http: HttpClient) {
		this.taskUrl = 'http://localhost:8080/tasks';
	}

	public findAll(): Observable<Task[]> {
		return this.http.get<Task[]>(this.taskUrl);
	}

	public save(task: Task) {
		return this.http.post<Task>(this.taskUrl, task);
	}
	
	public complete(id: String) {
		return this.http.put<Task>(this.taskUrl + '/' + id, null);
	}
	
	public remove(id: string) {
		return this.http.delete<Task>(this.taskUrl + '/' + id);
	}
}
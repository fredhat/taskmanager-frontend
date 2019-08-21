import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

/**
 * The routing for this application is pretty basic due to it only having two distinct pages.
 */

const routes: Routes = [
	{ path: '', redirectTo: '/tasks', pathMatch: 'full' },
	{ path: 'tasks', component: TaskListComponent },
	{ path: 'addtask', component: TaskFormComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

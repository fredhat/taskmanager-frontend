import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskService } from './service/task.service';

@NgModule({
	declarations: [
		AppComponent,
		TaskListComponent,
		TaskFormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatListModule,
		MatToolbarModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatRadioModule
	],
	providers: [TaskService],
	bootstrap: [AppComponent]
})
export class AppModule { }
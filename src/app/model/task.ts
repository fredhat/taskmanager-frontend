/**
 * Front-end wrapper for the back-end's Task entity.
 */

export class Task {
	id: string;
	name: string;
	description: string;
	deadline: string;
	isCompleted: boolean;
	isDeleted: boolean;
	//Note: Status is the only front-end specific Task field as it is solely used for UI purposes.
	status: string;
}

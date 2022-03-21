export interface IPriorityProps {
	priority: string;
}

export interface IInputProps extends IPriorityProps {
	value: string;
	setValue(value: string): void;
	createTask(e: React.MouseEvent | React.FormEvent): void;
}

export interface IFormProps extends IPriorityProps {
	addTask(newTask: ITask): void;
}

export interface ITasksProps {
	tasks: ITask[];
	completeTask(task: ITask): void;
	removeTask(task: ITask): void;
}

export interface ITask {
	id: number;
	name?: string;
	checked: boolean;
	readonly priority: string;
}

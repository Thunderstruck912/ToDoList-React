import React, {FC, useState} from "react";
import {IFormProps, ITask} from "../../types/types";
import InputForm from "../../UI/InputForm/InputForm";

const TaskForm: FC<IFormProps> = ({addTask, priority}) => {
	const [value, setValue] = useState<string>("");

	class Task implements ITask {
		checked;
		readonly id;
		readonly priority;
		constructor(public name: string) {
			this.id = Date.now();
			this.name = name;
			this.checked = false;
			this.priority = priority;
		}
	}

	const createTask = (
		e: React.MouseEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>,
	) => {
		e.preventDefault();
		if (!value) return;
		const newTask = new Task(value);
		addTask(newTask);
		setValue("");
	};

	return (
		<InputForm
			priority={priority}
			createTask={createTask}
			value={value}
			setValue={setValue}
		/>
	);
};

export default TaskForm;

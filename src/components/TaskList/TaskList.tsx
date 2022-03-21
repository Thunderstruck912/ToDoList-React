import React, {FC, useEffect, useState} from "react";
import Title from "../../UI/Title/Title";
import InputForm from "../InputForm/InputForm";
import Tasks from "../Tasks/Tasks";
import {IPriorityProps} from "../../types/types";
import {ITask} from "../../types/types";

const TaskList: FC<IPriorityProps> = ({priority}) => {
	const [tasks, setTasks] = useState<ITask[]>([
		...(JSON.parse(localStorage.getItem("Task_" + priority)!) || []),
	]);

	useEffect(() => {
		localStorage.setItem("Task_" + priority, JSON.stringify(tasks));
	}, [tasks]);

	const addTask = (newTask: ITask): void => {
		setTasks([newTask, ...filterTask()]);
	};

	const removeTask = (task: ITask): void => {
		setTasks(
			filterTask().filter((elem: ITask): boolean => elem.id !== task.id),
		);
	};

	const completeTask = (task: ITask): void => {
		setTasks([
			...tasks.map(
				(elem: ITask): ITask =>
					elem.id === task.id ? {...elem, checked: !elem.checked} : {...elem},
			),
		]);
	};

	const filterTask = (): ITask[] => [
		...tasks.filter((elem: ITask): boolean => elem.checked === false),
		...tasks.filter((elem: ITask): boolean => elem.checked === true),
	];

	return (
		<>
			<Title priority={priority} />
			<InputForm priority={priority} addTask={addTask} />
			<Tasks
				tasks={tasks}
				removeTask={removeTask}
				completeTask={completeTask}
			/>
		</>
	);
};

export default TaskList;

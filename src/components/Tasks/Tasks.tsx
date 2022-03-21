import React, {FC} from "react";
import {ITasksProps} from "../../types/types";
import cl from "./Tasks.module.css";

const Tasks: FC<ITasksProps> = ({tasks, completeTask, removeTask}) => {
	return (
		<>
			{tasks.map((task, index) => (
				<form
					className={task.checked ? `${cl.form_active}` : `${cl.form}`}
					key={index}>
					<input
						type="checkbox"
						className={cl.input_checkbox}
						onChange={() => completeTask(task)}
						checked={task.checked}
					/>
					<p>{task.name}</p>
					<button onClick={() => removeTask(task)} className={cl.input_btn} />
				</form>
			))}
		</>
	);
};

export default Tasks;

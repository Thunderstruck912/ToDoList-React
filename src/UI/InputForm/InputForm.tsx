import React, {FC} from "react";
import cl from "./InputForm.module.css";
import {IInputProps} from "../../types/types";

const InputForm: FC<IInputProps> = (props) => {
	return (
		<form className={cl.input_form} onSubmit={props.createTask}>
			<input
				type="text"
				className={cl.input_text}
				placeholder={
					props.priority === "high" ? "Добавить важное дело" : "Добавить"
				}
				onChange={(e) => props.setValue(e.target.value)}
				value={props.value}
			/>
			<button className={cl.input_btn} onClick={props.createTask} />
		</form>
	);
};

export default InputForm;

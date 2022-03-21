import React, {FC} from "react";
import cl from "./Title.module.css";
import {IPriorityProps} from "../../types/types";

const Title: FC<IPriorityProps> = (props) => {
	return (
		<>
			<h2 className={cl.title}>{props.priority.toUpperCase()}</h2>
		</>
	);
};

export default Title;

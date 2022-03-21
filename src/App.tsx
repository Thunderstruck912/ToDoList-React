import React, {FC} from "react";
import TaskList from "./components/TaskList/TaskList";
import "./style/app.css";

const App: FC = () => {
	return (
		<div className="app">
			<TaskList priority="high" />
			<TaskList priority="low" />
		</div>
	);
};

export default App;

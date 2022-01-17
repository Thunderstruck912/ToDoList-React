import React from "react";
import "./styles/app.css";
import TaskList from "./components/taskList";

function App() {
	return (
		<div className="App">
			<div className="main">
				<div className="task">
					<TaskList priority="high" />
				</div>
				<div className="task">
					<TaskList priority="low" />
				</div>
			</div>
		</div>
	);
}

export default App;

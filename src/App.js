import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
	constructor() {
		super();
		this.state = { todo: todo };
	}

	addTask = (newTaskName) => {
		this.setState({
			todo: [
				...this.state.todo,
				{
					task: newTaskName,
					id: Date.now(),
					completed: false,
				},
			],
		});
	};

	toggleCompleted = (taskId) => {
		this.setState({
			todo: this.state.todo.map((task) => {
				if (task.id === taskId) {
					return {
						...task,
						completed: !task.completed,
					};
				}
				return task;
			}),
		});
	};

	clearCompleted = () => {
		this.setState({
			todo: this.state.todo.filter((task) => !task.completed),
		});
	};

	render() {
		return (
			<div className="App">
				<h2>Welcome to your Todo App!</h2>

				<TodoForm addTask={this.addTask} />
				<TodoList
					todo={this.state.todo}
					toggleCompleted={this.toggleCompleted}
					clearCompleted={this.clearCompleted}
				/>
			</div>
		);
	}
}

export default App;
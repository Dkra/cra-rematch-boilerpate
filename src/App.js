import React, { Component } from 'react'
import AddTodoForm from './components/AddTodoForm'
import logo from './logo.svg'
import './App.css'

// class App extends Component {
// 	render() {
// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 					<img src={logo} className="App-logo" alt="logo" />
// 					<h1 className="App-title">Welcome to React</h1>
// 				</header>
// 				<p className="App-intro">
// 					To get started, edit <code>src/App.js</code> and save to reload.
// 				</p>
// 			</div>
// 		)
// 	}
// }

const App = props => (
	<div>
		{props.completedTodos} of {props.totalTodos} todos are done!
		<ul>
			{props.todosArray.map(todo => (
				<li key={todo.id}>
					<span
						style={{
							cursor: 'pointer',
							textDecoration: todo.done ? 'line-through' : 'none'
						}}
						onClick={() => props.toggleDone(todo.id)}
					>
						{todo.text}
					</span>{' '}
					<button onClick={() => props.remove(todo.id)}>delete</button>{' '}
					<button onClick={() => props.asyncRemove(todo.id)}>
						async delete (1 second delay)
					</button>
				</li>
			))}
		</ul>
		<AddTodoForm />
	</div>
)

export default App

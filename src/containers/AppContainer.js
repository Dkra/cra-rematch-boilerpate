import { connect } from 'react-redux'
import App from '../App'

const AppContainer = connect(
	state => {
		const todosIds = Object.keys(state.todos)
		return {
			totalTodos: todosIds.length,
			completedTodos: todosIds.filter(id => state.todos[id].done).length,
			todosArray: todosIds.map(id => ({
				...state.todos[id],
				id
			}))
		}
	},
	dispatch => ({
		toggleDone: id => dispatch.todos.toggleDone(id),
		remove: id => dispatch.todos.remove(id),
		asyncRemove: id => dispatch.todos.asyncRemove(id)
	})
)(App)

export default AppContainer

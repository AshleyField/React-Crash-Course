import React from 'react';
import PropTypes from 'prop-types';;

export class TodoItem extends React.Component {

	getStyle = () => {
		return {
			backgroundColor: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}

	render() {
	
		const { id, title } = this.props.todo; // this line makes it so that when you want to call the property you dont have to type this.props.blah.id every time, the individual property can be called.

		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
					{title}
					<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
				</p>
			</div>
		)
	}
}

// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '6px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

// PropTypes
TodoItem.propTypes = {
	todos: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
};

export default TodoItem
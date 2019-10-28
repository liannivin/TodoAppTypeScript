import React from 'react';
import TodoListItem from './TodoListItem';
import { Todo } from '../interfaces/Todo';

interface Props {
	todos: Todo[];
}

function TodoList({ todos }: Props) {
	return (
		<ul className="list-group">
			{todos.map((todo) => (
				<TodoListItem
					todo={{
						task: todo.task,
						finished: todo.finished
					}}
				/>
			))}
		</ul>
	);
}

export default TodoList;

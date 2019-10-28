import React from 'react';
import { Todo } from '../interfaces/Todo';

interface Props {
	todo: Todo;
}

function TodoListItem({ todo }: Props) {
	return (
		<div>
			<li className="list-group-item">{todo.task}</li>
		</div>
	);
}

export default TodoListItem;

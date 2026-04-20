import { useContext } from 'react';
import { Checkbox } from 'components';
import { TodoContext } from 'app/TodoContext';
import 'app/TodoItem/TodoItem.css';

export function TodoItem({ id, name, info, isImportant, isCompleted }) {
  const { toggle, remove } = useContext(TodoContext);

  return (
    <div className="todo-item">
      <Checkbox checked={isCompleted} onChange={() => toggle(id)} />
      <span className={isImportant ? ' fw-bold' : ''} style={isCompleted ? { textDecoration: 'line-through' } : {}}>
        {name}
      </span>
      <span className={isImportant ? ' fw-bold' : ''} style={isCompleted ? { textDecoration: 'line-through' } : {}}>
        {info}
      </span>
      <span>
        <button className="btn-delete" onClick={() => remove(id)}></button>
      </span>
      {isImportant}
    </div>
  );
}

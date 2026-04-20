import { Checkbox } from 'components';
import 'app/TodoItem/TodoItem.css';

export function TodoItem({ id, name, info, isImportant, isCompleted, toggle, remove }) {
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

import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from 'components';
import { actions } from 'redux/actions';
import 'app/TodoItem/TodoItem.css';

export function TodoItem(props) {
  const todo = useSelector((state) => state.todos.find((item) => item.id === props.id)); // извлекаем их хранилища один элемент списка задач по id
  const { id, name, info, isImportant, isCompleted } = todo;

  const dispatch = useDispatch(); //просто возвращает функцию store.dispatch

  // создаем две функции для отправки экшенов в хранилище
  const toggle = () => dispatch(actions.todo.toggle(id));
  const remove = () => dispatch(actions.todo.remove(id));

  return (
    <div className="todo-item">
      <Checkbox checked={isCompleted} onChange={toggle} />
      <span className={isImportant ? ' fw-bold' : ''} style={isCompleted ? { textDecoration: 'line-through' } : {}}>
        {name}
      </span>
      <span className={isImportant ? ' fw-bold' : ''} style={isCompleted ? { textDecoration: 'line-through' } : {}}>
        {info}
      </span>
      <span>
        <button className="btn-delete" onClick={remove}></button>
      </span>
      {isImportant}
    </div>
  );
}

import { TodoItem } from 'app/TodoItem/TodoItem';
import 'app/TodoList/TodoList.css';

export function TodoList({ todos, toggle, remove }) {
  return (
    <>
      <div className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo) => <TodoItem key={todo.id} {...todo} toggle={toggle} remove={remove} />)
        ) : (
          <p>Список задач пустой</p>
        )}
      </div>
    </>
  );
}

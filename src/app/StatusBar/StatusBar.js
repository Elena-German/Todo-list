import { useContext } from 'react';
import 'app/StatusBar/StatusBar.css';
import { TodoContext } from 'app/TodoContext';

export function StatusBar() {
  const { todos, completed, uncompleted, important } = useContext(TodoContext);

  return (
    <div className="status-bar">
      <span className="text-decoration-underline">Всего задач {todos.length}</span>: не завершенных {uncompleted()},
      завершенных
      {completed()}, <span className="fw-bold">важных {important()} </span>.
    </div>
  );
}

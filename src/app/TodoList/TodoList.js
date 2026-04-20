import { TodoContext } from 'app/TodoContext';
import { TodoItem } from 'app/TodoItem/TodoItem';
import 'app/TodoList/TodoList.css';
import { useContext } from 'react';

export function TodoList() {
  const context = useContext(TodoContext);

  return (
    <>
      <div className="todo-list">
        {context.todos.length > 0 ? (
          context.todos.map((todo) => <TodoItem key={todo.id} {...todo} />)  // { id, name, info, isImportant, isCompleted }
        ) : (
          <p>Список задач пустой</p>
        )}
      </div>
    </>
  );
}

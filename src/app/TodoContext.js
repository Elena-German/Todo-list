import { createContext, useState } from 'react';

// ESLint не может правильно распознать структуру экспортов новой версии библиотеки uuid
// добавлено исключение, чтобы линтер не блокировал сборку:

// eslint-disable-next-line import/named
import { v4 as uuid } from 'uuid';

export const TodoContext = createContext(); //метод из API контекста в React,
// который позволяет сохранять какие-либо данные и передавать их вниз по дереву без передачи пропсов в дочерние компоненты.
// createContext - объявление контекста
// Context.Provider - компонент, оборачивающий наши компоненты, которые должны иметь доступ к данным.
// useContext - хук, позволяющий получить данные из context.


const initState = [
  { id: 1, name: 'Первая задача', info: 'описание задачи описание задачи описание задачи', isImportant: false, isCompleted: false, },
  { id: 2, name: 'Вторая задача', info: 'описание задачи описание задачи описание задачи', isImportant: false, isCompleted: true, },
  { id: 3, name: 'Третья задача', info: 'описание задачи описание задачи описание задачи', isImportant: false, isCompleted: false, },
  { id: 4, name: 'Четвертая задача', info: 'описание задачи описание задачи описание задачи', isImportant: true, isCompleted: true, },
];

export function TodoContextProvider(props) {  //создаем провайдер TodoContextProvider (обычный компонент с children, но обернутый в Context.Provider)

  const [todos, setTodos] = useState(initState);

  const create = (name, info, isImportant) => {
    const newTodo = {
      id: uuid(),
      name: name,
      info: info,
      isImportant: isImportant,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggle = (id) => {
    const newTodos = todos.map((item) => {
      return item.id === id ? { ...item, isCompleted: !item.isCompleted } : item;
    });
    setTodos(newTodos);
  };

  const remove = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const completed = () => todos.filter((todo) => todo.isCompleted).length;
  const uncompleted = () => todos.filter((todo) => !todo.isCompleted).length;
  const important = () => todos.filter((todo) => todo.isImportant).length;

  const context = {
    todos: todos,
    create: create,
    toggle: toggle,
    remove: remove,
    completed: completed,
    uncompleted: uncompleted,
    important: important
  };

  return (
    <TodoContext.Provider value={context}> {/* В value передаем данные, которые будут доступны всем дочерним компонентам. */}
      {props.children}
    </TodoContext.Provider>
  );
}

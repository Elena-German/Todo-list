import { useState } from 'react';
// ESLint не может правильно распознать структуру экспортов новой версии библиотеки uuid
// добавлено исключение, чтобы линтер не блокировал сборку
// eslint-disable-next-line import/named
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from 'app/TodoList/TodoList';
import { TodoForm } from 'app/TodoForm/TodoForm';
import { StatusBar } from 'app/StatusBar/StatusBar';
import { PageContainer } from 'components';

const initState = [
  {
    id: 1,
    name: 'Первая задача',
    info: 'описание задачи описание задачи описание задачи',
    isImportant: false,
    isCompleted: false,
  },
  {
    id: 2,
    name: 'Вторая задача',
    info: 'описание задачи описание задачи описание задачи',
    isImportant: false,
    isCompleted: true,
  },
  {
    id: 3,
    name: 'Третья задача',
    info: 'описание задачи описание задачи описание задачи',
    isImportant: false,
    isCompleted: false,
  },
  {
    id: 4,
    name: 'Четвертая задача',
    info: 'описание задачи описание задачи описание задачи',
    isImportant: true,
    isCompleted: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initState);

  const toggle = (id) => {
    const newTodos = todos.map((item) => {
      return item.id === id ? { ...item, isCompleted: !item.isCompleted } : item;
    });
    setTodos(newTodos);
  };

  const remove = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const create = (name, info, isImportant) => {
    const newTodo = {
      id: uuidv4(),
      name: name,
      info: info,
      isImportant: isImportant,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completed = () => todos.filter((todo) => todo.isCompleted).length;
  const uncompleted = () => todos.filter((todo) => !todo.isCompleted).length;
  const important = () => todos.filter((todo) => todo.isImportant).length;

  return (
    <PageContainer>
      <div className="App">
        <h1>Список задач</h1>
        <StatusBar total={todos.length} completed={completed()} uncompleted={uncompleted()} important={important()} />
        <TodoList todos={todos} toggle={toggle} remove={remove} />
        <TodoForm create={create} />
      </div>
    </PageContainer>
  );
}
export default App;

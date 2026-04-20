import { TodoList } from 'app/TodoList/TodoList';
import { TodoForm } from 'app/TodoForm/TodoForm';
import { StatusBar } from 'app/StatusBar/StatusBar';
import { PageContainer } from 'components';
import { TodoContextProvider } from 'app/TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <PageContainer>
        <div className="App">
          <h1>Список задач</h1>
          <StatusBar />
          <TodoList />
          <TodoForm />
        </div>
      </PageContainer>
    </TodoContextProvider>
  );
}

export default App;

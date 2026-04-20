import { useContext, useState } from 'react';
import { Checkbox } from 'components';
import { TodoContext } from 'app/TodoContext';
import 'app/TodoForm/TodoForm.css';

export function TodoForm() {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [important, setImportant] = useState(false);

  const context = useContext(TodoContext);

  const handleClick = () => {
    if (name.trim() && info.trim()) {
      context.create(name, info, important);
      setName('');
      setInfo('');
      setImportant(false);
    }
  };

  return (
    <div className="todo-form">
      <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Название" />
      <input name="info" type="text" value={info} onChange={(e) => setInfo(e.target.value)} placeholder="Описание" />
      <Checkbox label={'важная задача'} checked={important} onChange={() => setImportant(!important)} />
      <button onClick={handleClick}>Добавить</button>
    </div>
  );
}

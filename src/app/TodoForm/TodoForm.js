import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { Checkbox } from 'components';
import { todoCreate } from 'redux/todoActions';
import 'app/TodoForm/TodoForm.css';

function TodoForm(props) {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [important, setImportant] = useState(false);

  const handleClick = () => {
    if (name.trim() && info.trim()) {
      const data = {
        id: uuid(),
        name: name,
        info: info,
        isImportant: important,
        isCompleted: false,
      };
      props.dispatch(todoCreate(data));
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

const TodoFormConnected = connect()(TodoForm);

export { TodoFormConnected as TodoForm };

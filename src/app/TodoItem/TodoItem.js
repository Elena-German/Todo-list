import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Checkbox } from 'components';
import { actions } from 'redux/actions';
import 'app/TodoItem/TodoItem.css';

function TodoItem({ id, name, info, isImportant, isCompleted, dispatch }) {
  return (
    <div className="todo-item">
      <Checkbox checked={isCompleted} onChange={() => dispatch(actions.todo.toggle(id))} />
      <span className={isImportant ? ' fw-bold' : ''} style={isCompleted ? { textDecoration: 'line-through' } : {}}>
        {name}
      </span>
      <span className={isImportant ? ' fw-bold' : ''} style={isCompleted ? { textDecoration: 'line-through' } : {}}>
        {info}
      </span>
      <span>
        <button className="btn-delete" onClick={() => dispatch(actions.todo.remove(id))}></button>
      </span>
      {isImportant}
    </div>
  );
}

/* ДО ОПТИМИЗАЦИИ

function mapStateToProps(state, ownProps) { //Результатом будет простой объект, который будет объединен с собственными пропсами обернутого компонента.
  return state.todos.find((item) => item.id === ownProps.id); // возвращаем объект типа { id: 3, name: 'Третья задача', info: 'описание', isCompleted: false }
}

const TodoItemConnected = connect(mapStateToProps)(TodoItem);

*/

// ПОСЛЕ ОПТИМИЗАЦИИ (для каждого экземпляра компонента TodoItem создать свой экземпляр мемоизированного селектора )
const createItemSelector = () =>
  createSelector(
    (state) => state.todos,
    (state, id) => id,
    (items, id) => {
      return items.find((item) => item.id === id);
    }
  );

const createMapStateToProps = () => {
  const itemSelector = createItemSelector();
  return (state, ownProps) => itemSelector(state, ownProps.id); // возвращаемая ф-ция будет использоваться как фактическая ф-ция mapStateToProps
};
const TodoItemConnected = connect(createMapStateToProps)(TodoItem);
export { TodoItemConnected as TodoItem };

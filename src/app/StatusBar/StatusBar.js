import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import 'app/StatusBar/StatusBar.css';

function StatusBar({ total, completed, uncompleted, important }) {
  return (
    <div className="status-bar">
      <span className="text-decoration-underline"> Всего задач {total}</span>: не завершенных {uncompleted}, завершенных{' '}
      {completed}, <span className="fw-bold">важных {important} </span>
    </div>
  );
}

const all = (state) => state.todos;
const total = (state) => all(state).length;

// Результат выполнения первой функции-аргумента (входной селектор) подается на вход второй функции-аргумента
// (здесь это анонимная функция). Если результат выполнения входного селектора будет таким же, как в прошлый
// раз — то вторая функция (результирующая) не вызывается, а результат возвращается из кэша. Входных селекторов
// может быть два или три — тогда результирующая функция принимает два или три аргумента.
const completed = createSelector(
  all, //входной селектор
  (items) => items.filter((item) => item.isCompleted).length //результирующая
);

const uncompleted = createSelector(all, (items) => items.filter((item) => !item.isCompleted).length);

const important = createSelector(all, (items) => items.filter((item) => item.isImportant).length);

function mapStateToProps(state) {
  return {
    total: total(state),
    completed: completed(state),
    uncompleted: uncompleted(state),
    important: important(state),
  };
}

const StatusBarConnected = connect(mapStateToProps)(StatusBar);

export { StatusBarConnected as StatusBar };

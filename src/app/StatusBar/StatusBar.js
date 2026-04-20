import 'app/StatusBar/StatusBar.css';

export function StatusBar({ total, completed, uncompleted, important }) {
  return (
    <div className="status-bar">
      <span className="text-decoration-underline">Всего задач {total}</span>: не завершенных {uncompleted}, завершенных
      {completed}, <span className="fw-bold">важных {important} </span>.
    </div>
  );
}

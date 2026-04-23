import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'redux/actions';
import { selectors } from 'redux/selectors'

export function Login() {
  const auth = useSelector(selectors.user.auth); // извлекаем их хранилища данные по авторизации (да,нет)

  // создаем две функции для отправки экшенов в хранилище
  const dispatch = useDispatch();
  const login = () => dispatch(actions.user.login());
  const logout = () => dispatch(actions.user.logout());

  return (
    <div className="user-login">
      {auth ? (
        <>
          <span>Пользователь авторизован</span>
          &nbsp;
          <button onClick={logout}>Выйти</button>
        </>
      ) : (
        <>
          <span>Пользователь не авторизован</span>
          &nbsp;
          <button onClick={login}>Войти</button>
        </>
      )}
    </div>
  );
}

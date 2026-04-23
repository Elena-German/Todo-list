import { connect } from 'react-redux';
import { actions } from 'redux/actions';

function Login({ auth, dispatch }) {
  const login = () => dispatch(actions.user.login()); //вход в уз
  const logout = () => dispatch(actions.user.logout()); // выход из уз

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

function mapStateToProps(state) {
  return {
    auth: state.user.auth,
  };
}

const LoginConnected = connect(mapStateToProps)(Login);

export { LoginConnected as Login };

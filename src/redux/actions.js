import { todoCreate, todoToggle, todoRemove } from 'redux/todoActions.js';
import { userLogin, userLogout } from 'redux/userActions';

export const actions = {
    todo: {
        create: todoCreate, // содержит функцию, которая возвращает объект действия (тип type и данные payload)
        toggle: todoToggle,
        remove: todoRemove,
    },
    user: {
        login: userLogin,
        logout: userLogout,
    },
};

import { USER_LOGIN, USER_LOGOUT } from 'redux/typesActions';

const initState = {
    auth: false,
};

export function userReducer(state = initState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return { auth: true };
        case USER_LOGOUT:
            return { auth: false };
        default:
            return state;
    }
}

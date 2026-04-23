import { TODO_CREATE, TODO_TOGGLE, TODO_REMOVE } from 'redux/typesActions';

const initState = [
  { id: 1, name: 'Первая задача', info: 'описание задачи описание задачи описание задачи', isImportant: false, isCompleted: false, },
  { id: 2, name: 'Вторая задача', info: 'описание задачи описание задачи описание задачи', isImportant: false, isCompleted: true, },
  { id: 3, name: 'Третья задача', info: 'описание задачи описание задачи описание задачи', isImportant: false, isCompleted: false, },
  { id: 4, name: 'Четвертая задача', info: 'описание задачи описание задачи описание задачи', isImportant: true, isCompleted: true, },
];

export function todoReducer(state = initState, action) { //reducer
    let newState;
    switch (action.type) {
        case TODO_CREATE:
            newState = [...state, action.payload];
            return newState;
        case TODO_TOGGLE:
            newState = state.map(todo => {
                return todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo;
            });
            return newState;
        case TODO_REMOVE:
            newState = state.filter(todo => todo.id !== action.payload);
            return newState;
        default:
            return state;
    }
}

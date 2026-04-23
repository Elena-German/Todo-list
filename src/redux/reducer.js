import { combineReducers } from 'redux';
import { todoReducer } from 'redux/todoReducer.js';
import { userReducer } from 'redux/userReducer';

export const reducer = combineReducers({ todos: todoReducer, user: userReducer, });

// reducer - чистая функция, которая на базе текущего состояния state и полученного action генерирует НОВОЕ состояние state

// чистая функция - при одинаковых входных данных функция всегда возвращает один и тот же результат:
// - не изменяет внешнее состояние (например, глобальные переменные, свойства объектов за пределами своей области видимости),
// - не взаимодействует с внешними системами (API, базами данных, DOM) и не мутирует данные

/*

initState здесь это:
 {
    todos: [
            { id: 1, name: 'Первая задача', info: 'описание задачи описание задачи описание задачи', isImportant: false, isCompleted: false, },
            { id: 2, name: 'Вторая задача', info: 'описание задачи описание задачи описание задачи', isImportant: false, isCompleted: true, },
            { id: 3, name: 'Третья задача', info: 'описание задачи описание задачи описание задачи', isImportant: false, isCompleted: false, },
            { id: 4, name: 'Четвертая задача', info: 'описание задачи описание задачи описание задачи', isImportant: true, isCompleted: true, },
          ],
    user: {
        auth: false
          }
}

*/

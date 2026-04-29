/*

 (Redux требует, чтобы функции-редукторы были «чистыми» и рассматривали значения состояния как неизменяемые.
 Это необходимо для того, чтобы обновления состояния были предсказуемыми и наблюдаемыми)

 Этот подход (ниже) работает хорошо, но не лишен бойлерплейта (относится к секциям кода, которые должны быть написаны во многих местах с минимальными изменениями)
 и подвержен ошибкам. Например, легко забыть описать случай default или не установить начальное состояние.

export function todoReducer(state = initState, action) {
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

Функция createReducer упрощает создание функции редюсера, определяя их как таблицы поиска мини-функций для обработки каждого типа действия.
Она также позволяет существенно упростить логику иммутабельного обновления, написав код в «мутабельном» стиле внутри мини-редюсеров.

«Мутабельный» стиль обработки событий доступен благодаря использованию библиотеки Immer.
Функция обработчик может либо «мутировать» переданный state, либо возвращать новый state.
Но, благодаря Immer, реальная мутация объекта не осуществляется - редьюсер получает прокси-состояние,
которое преобразует все изменения в эквивалентные операции копирования.

!!! Самое главное: вам нужно убедиться, что вы либо изменяете state аргумент, либо возвращаете новое состояние но не делаете и то, и другое !!!

builderCallback (builder: Builder) => void - Обратный вызов, получающий объект builder для определения редукторов по шаблону
с помощью вызовов builder.addCase(actionCreatorOrType, reducer).

Методы конструктора:

1 - builder.addCase (Добавляет редуктор для обработки одного конкретного типа действия.
                   (Все вызовы builder.addCase должны предшествовать вызовам builder.addMatcher или builder.addDefaultCase.)
                    Параметры:
                    * actionCreator - Либо простая строка с типом действия, либо генератор действий, созданный с помощью createAction,
                    который можно использовать для определения типа действия.
                    * reducer  - Фактическая функция-редуктор.

2 - builder.addAsyncThunk (Добавляет редукторы для обработки действий на основе создателя действий AsyncThunk)
3 - builder.addMatcher (Позволяет сопоставлять входящие действия с собственной функцией фильтрации, а не только со свойством action.type .)
4 - builder.addDefaultCase (Добавляет редуктор "по умолчанию", который выполняется, если для данного действия не был выполнен ни один редуктор-кейс, ни один редуктор-матчер.)

*/
import { createReducer } from '@reduxjs/toolkit';
import { todoCreate, todoToggle, todoRemove } from 'redux/todoActions';

const initState = [
  { id: 1, name: 'Первая задача', info: 'описание задачи описание задачи описание задачи', isImportant: false, isCompleted: false, },
  { id: 2, name: 'Вторая задача', info: 'описание задачи описание задачи описание задачи', isImportant: false, isCompleted: true, },
  { id: 3, name: 'Третья задача', info: 'описание задачи описание задачи описание задачи', isImportant: false, isCompleted: false, },
  { id: 4, name: 'Четвертая задача', info: 'описание задачи описание задачи описание задачи', isImportant: true, isCompleted: true, },
];

export const todoReducer = createReducer(initState, (builder) => {
    builder
        .addCase(todoCreate, (state, action) => { // todoCreate.toString() === 'TODO_CREATE'
            state.push(action.payload); // мутация state
        })
        .addCase(todoToggle, (state, action) => { // todoToggle.toString() === 'TODO_TOGGLE'
            const item = state.find((item) => item.id === action.payload);
            item.isCompleted = !item.isCompleted; // мутация state
        })
        .addCase(todoRemove, (state, action) => { // todoRemove.toString() === 'TODO_REMOVE'
            return state.filter((item) => item.id !== action.payload); // возврат нового state
        });
});

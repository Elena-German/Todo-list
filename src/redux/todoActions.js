import { createAction } from '@reduxjs/toolkit';

/* При использовании библиотеки Redux мы должны объявить константы типов действий, создать генераторы действий (action creator)
— и потом использовать функцию store.dispatch для отправки действий.
Генераторы действий нужны для удобства, чтобы не работать напрямую с объектом action, который содержит обязательное поле type и необязетельное поле payload.

Пр: export const TODO_CREATE = 'TODO_CREATE';

export function todoCreate(data) {
    return {
        type: TODO_CREATE,
        payload: data,
    };
}

Функция createAction позволяет два действия — объявление константы и создание генератора действия — объединить в одно.

На вход createAction принимает тип действия и возвращает генератор действия для этого типа.
Генератор действия может быть вызван либо без аргументов, либо с некоторым аргументом (полезная нагрузка),
значение которого будет помещено в поле payload созданного действия.
У созданных функцией createAction генераторов действий переопределен метод toString, так что тип действия становится их строковым представлением.

Функция createAction может принимать второй аргумент prepareAction. Это функция, которая позволяет подготовить payload, прежде чем он будет использован в редюсере.
Например, при создании элемента списка задач, мы получаем только название задачи — а нам нужен объект с полями id, title и completed.

const todoCreate = createAction('TODO_CREATE', function prepare(text) {
    return {
        payload: {
            title: text,
            id: uuid(),
            completed: false,
        },
    }
});

ПРИНИМАЕТ: тип действия (строку) и ВОЗВРАЩАЕТ функцию-создатель для этого типа.

const increment = createAction('counter')

let action = increment() // { type: 'counter' }
action = increment(3)   // { type: 'counter', payload: 3 }

*/

export const todoCreate = createAction('TODO_CREATE');
export const todoToggle = createAction('TODO_TOGGLE');
export const todoRemove = createAction('TODO_REMOVE');

import { createAction } from '@reduxjs/toolkit';

/* Функция createAction позволяет два действия — объявление константы и создание генератора действия — объединить в одно

 ПРИНИМАЕТ: тип действия (строку) и ВОЗВРАЩАЕТ функцию-создатель для этого типа.

 const increment = createAction('counter')
 let action = increment() // { type: 'counter' }
 action = increment(3)   // { type: 'counter', payload: 3 }
*/

export const userLogin = createAction('USER_LOGIN');
export const userLogout = createAction('USER_LOGOUT');

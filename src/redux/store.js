//Глобальное хранилище приложения
import { createStore } from 'redux';
import {reducer} from 'redux/reducer'

export const store = createStore(reducer); //createStore(reducer, preloadedState?, enhancer?)  - cоздает Redux хранилище
// reducer (Функция): корневая функция-редуктор, которая возвращает следующее дерево состояний
// на основе текущего дерева состояний и действия, которое необходимо обработать.




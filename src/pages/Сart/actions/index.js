import { createAction } from "redux-actions";


export const ADD_TO_CART = createAction('ADD_TO_CART');

export const REMOVE_FROM_CART = createAction('REMOVE_FROM_CART');

export const UPDATE_QUANTITY_IN_CART = createAction('UPDATE_QUANTITY_IN_CART');

export const UPDATE_SELECTED_ATTRIBUTE = createAction('UPDATE_SELECTED_ATTRIBUTE');

export const DELETE = createAction('DELETE');




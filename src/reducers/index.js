import { handleActions } from "redux-actions";

import * as actions from "../actions/index";

const initialState = {
	selectedCategory: "all",
	selectedCurrency: "$",
};

export const mainReducer = handleActions(
	{
		[actions.SELECT_CATEGORY]: (state, { payload }) => ({
			...state,
			selectedCategory: payload,
		}),

		[actions.SELECT_CURRENCY]: (state, { payload }) => ({
			...state,
			selectedCurrency: payload,
		}),
	},
	initialState
);

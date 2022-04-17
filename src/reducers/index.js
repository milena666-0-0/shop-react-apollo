import { handleActions } from "redux-actions";

import * as actions from "../actions/index";

const initialState = {
	products: [],
	selectedProduct: {},
	selectedCategory: "all",
	selectedCurrency: "$",
};

export const mainReducer = handleActions(
	{
		[actions.SELECT_CATEGORY]: (state, { payload }) => ({
			...state,
			selectedCategory: payload,
		}),

		[actions.SELECT_PRODUCT]: (state, { payload }) => {
			const selectedProduct = state.products.find(
				(product) => product.id === payload
			);

			return {
				...state,
				selectedProduct,
			};
		},

		[actions.SELECT_ATTRIBUTE]: (state, { payload }) => {
			const { id, attributeId } = payload;
			const copy = { ...state.selectedProduct };

			const changedProduct = copy.attributes.map((attribute) => {
				const attributeToChange = attribute.id === attributeId;

				if (attributeToChange) {
					const changedItems = attribute.items.map((item) =>
						item.id === id
							? { ...item, selected: true }
							: { ...item, selected: false }
					);

					return { ...attribute, items: changedItems };
				} else {
					return attribute;
				}
			});

			return {
				...state,
				selectedProduct: { ...copy, attributes: changedProduct },
			};
		},

		[actions.SELECT_CURRENCY]: (state, { payload }) => ({
			...state,
			selectedCurrency: payload,
		}),

		[actions.GET_ALL_PRODUCTS]: (state, { payload }) => {
			const copy = [
				...payload.categories.map((category) => category.products),
			];

			const allProducts = copy.reduce(
				(acc, product) => [...acc, ...product],
				[]
			);

			const productsWithChangedAttributes = allProducts.map((product) => {
				const newAttributes = product.attributes.map((attribute) => {
					const newItems = attribute.items.map((item) => {
						return attribute.items.indexOf(item) === 0
							? { ...item, selected: true }
							: { ...item, selected: false };
					});

					return { ...attribute, items: newItems };
				});

				return { ...product, attributes: newAttributes };
			});

			return {
				...state,
				products: productsWithChangedAttributes,
			};
		},
	},
	initialState
);

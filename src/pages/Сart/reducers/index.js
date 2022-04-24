import { handleActions } from "redux-actions";

import * as actions from "../actions/index";

const initialState = {
	cart: [],
	isCartOverlayOpen: false,
};

export const cartReducer = handleActions(
	{
		[actions.ADD_TO_CART]: (state, { payload }) => {
			const copy = [...state.cart];

			const selectedAttribute = payload.attributes.map(({ items }) => {
				return items.find((item) => item.selected).id;
			});

			payload.id = payload.id.split("#")[0];
			selectedAttribute.forEach((id) => (payload.id += `#${id}`));

			const productInCart = copy.find(
				(product) => product.id === payload.id
			);

			if (!productInCart) {
				payload.id = payload.id.split("#")[0];
				selectedAttribute.forEach((id) => (payload.id += `#${id}`));
				payload.quantity = 1;
				copy.push(payload);
			} else {
				payload.id = payload.id.split("#")[0];
				selectedAttribute.forEach((id) => (payload.id += `#${id}`));
				productInCart.quantity += 1;
			}

			return {
				...state,
				cart: copy,
			};
		},

		[actions.REMOVE_FROM_CART]: (state, { payload }) => {
			const copy = [...state.cart];

			const updatedCart = copy.filter((item) => item.id !== payload);

			return {
				...state,
				cart: updatedCart,
			};
		},

		[actions.UPDATE_QUANTITY_IN_CART]: (state, { payload }) => {
			const copy = [...state.cart];

			const { id, quantity } = payload;

			const itemToUpdate = copy.find((item) => item.id === id);

			itemToUpdate.quantity = quantity;

			return {
				...state,
				cart: copy,
			};
		},

		[actions.UPDATE_SELECTED_ATTRIBUTE]: (state, { payload }) => {
			let { id, attributeId, productId } = payload;
			const copy = [...state.cart];

			let productToChange = copy.find(
				(product) => product.id === productId
			);

			const index = copy.indexOf(productToChange);

			const changedAttributes = productToChange.attributes.map(
				(attribute) => {

					const attributeToChange = attribute.id === attributeId;

					if (attributeToChange) {

						const changedItems = attribute.items.map((item) => {

							if (item.id === id) {
								productId = productId.split("#")[0];
								productId += `#${id}`;
								return { ...item, selected: true };
							} else {
								return { ...item, selected: false };
							}

						});

						return { ...attribute, items: changedItems };
					} else {
						return attribute;
					}
				}
			);

			copy[index] = {
				...productToChange,
				id: productId,
				attributes: changedAttributes,
			};

			const inCart = state.cart.find(
				(item) => copy[index].id === item.id
			);

			if (inCart) {
				copy[index].quantity += inCart.quantity;

				const indexOf = state.cart.indexOf(inCart);

				copy.splice(indexOf, 1);
			}

			return {
				...state,
				cart: copy,
			};
		},

		[actions.DELETE]: (state) => {
			const copy = [...state.cart];

			return {
				...state,
				cart: copy.splice(0, copy.length - 1),
			};
		},
	},
	initialState
);

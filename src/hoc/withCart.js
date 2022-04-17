import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_QUANTITY_IN_CART,
} from "../pages/Сart/actions/index";

export const withCart = (WrappedComponent) => (props) => {
	const dispatch = useDispatch();

	const handleAddToCart = useCallback((item) => {
		dispatch(ADD_TO_CART(item));
	}, []);

	const handleRemoveFromCart = useCallback((id) => {
		dispatch(REMOVE_FROM_CART(id));
	}, []);

	const handleUpdateQuantity = useCallback(({ id, quantity }) => {
		dispatch(UPDATE_QUANTITY_IN_CART({ id, quantity }));
	}, []);

	return (
		<WrappedComponent
			{...props}
			handleAddToCart={handleAddToCart}
			handleRemoveFromCart={handleRemoveFromCart}
			handleUpdateQuantity={handleUpdateQuantity}
		/>
	);
};

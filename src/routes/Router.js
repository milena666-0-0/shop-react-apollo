import { Routes, Route } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import ProductsPageContainer from "../pages/ProductsPage/containers/ProductsPageContainer";
import ProductDetailsContainer from "../pages/ProductDetailsPage/containers/ProductDetailsContainer";
import CartPageContainer from "../pages/Сart/containers/CartPageContainer";

export const Router = () => {
	return (
		<Routes>
			<Route
				path={ROUTE_NAMES.HOME}
				element={<ProductsPageContainer />}
			/>
			<Route
				path={ROUTE_NAMES.PRODUCTS_DETAILS}
				element={<ProductDetailsContainer />}
			/>
			<Route path={ROUTE_NAMES.CART} element={<CartPageContainer />} />
		</Routes>
	);
};

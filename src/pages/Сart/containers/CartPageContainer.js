import { Component } from "react";
import { connect } from "react-redux";

import { UPDATE_SELECTED_ATTRIBUTE } from "../actions";
import { CartPageLayout } from "../components/CartPageLayout";

class CartPageContainer extends Component {
	render() {
		const { cart, selectedCurrency, handleChangeSelectedAttribute } =
			this.props;

		return (
			<CartPageLayout
				cart={cart}
				selectedCurrency={selectedCurrency}
				handleChangeSelectedAttribute={handleChangeSelectedAttribute}
			/>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		selectedCurrency: state.mainReducer.selectedCurrency,
		cart: state.cartReducer.cart,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleChangeSelectedAttribute: (index) =>
			dispatch(UPDATE_SELECTED_ATTRIBUTE(index)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPageContainer);

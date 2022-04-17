import { Component } from "react";
import { connect } from "react-redux";

import { CartPageLayout } from "../components/CartPageLayout";

class CartPageContainer extends Component {
	render() {
		const { cart, selectedCurrency } = this.props;

		return (
			<CartPageLayout
				cart={cart}
				selectedCurrency={selectedCurrency}
				handleIncQuantity={this.handleIncQuantity}
				handleDecQuantity={this.handleDecQuantity}
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

export default connect(mapStateToProps)(CartPageContainer);

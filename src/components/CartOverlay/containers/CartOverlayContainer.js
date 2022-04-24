import { Component, createRef } from "react";
import { connect } from "react-redux";

import { withRouter } from "../../../hoc/index";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import { CartOverlayView } from "../components/CartOverlayView";

class CartOverlayContainer extends Component {
	constructor(props) {
		super(props);

		this.cartWrapperRef = createRef();
	}

	handleCloseCartOverlay = (e) => {
		if (!this.cartWrapperRef.current.contains(e.target)) {
			this.props.handleCloseCartOverlay();
		}
	};

	handleNavigateToCart = () => {
		const { navigate } = this.props.router;
		navigate(ROUTE_NAMES.CART);
	};

	render() {
		const {
			cart,
			selectedCurrency,
			isCartOverlayOpen,
			handleCloseCartOverlay,
		} = this.props;

		return (
			<CartOverlayView
				cart={cart}
				cartWrapperRef={this.cartWrapperRef}
				selectedCurrency={selectedCurrency}
				isCartOverlayOpen={isCartOverlayOpen}
				handleCloseCartOverlay={this.handleCloseCartOverlay}
				onClose={handleCloseCartOverlay}
				handleIncQuantity={this.handleIncQuantity}
				handleDecQuantity={this.handleDecQuantity}
				handleNavigateToCart={this.handleNavigateToCart}
			/>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		cart: state.cartReducer.cart,
		selectedCurrency: state.mainReducer.selectedCurrency,
	};
};

export default connect(mapStateToProps)(withRouter(CartOverlayContainer));

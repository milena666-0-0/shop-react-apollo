import { Component } from "react";

import { CartOverlayCounterView } from "../components/CartOverlayCounterView";
import { withCart } from "../../../hoc/index";

class CartOverlayCounterContainer extends Component {
	handleIncQuantity = ({ id, quantity }) => {
		this.props.handleUpdateQuantity({ id, quantity: quantity + 1 });
	};

	handleDecQuantity = ({ id, quantity }) => {
		const { handleRemoveFromCart, handleUpdateQuantity } = this.props;

		if (quantity > 1) {
			handleUpdateQuantity({ id, quantity: quantity - 1 });
		} else {
			handleRemoveFromCart(id);
		}
	};

	render() {
		const { id, quantity } = this.props;

		return (
			<CartOverlayCounterView
				id={id}
				quantity={quantity}
				handleIncQuantity={this.handleIncQuantity}
				handleDecQuantity={this.handleDecQuantity}
			/>
		);
	};
};

export default withCart(CartOverlayCounterContainer);

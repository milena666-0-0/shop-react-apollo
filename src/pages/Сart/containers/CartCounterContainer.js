import { Component } from "react";

import { CartCounterView } from "../components/CartCounterView";
import { withCart } from "../../../hoc/index";

class Cartcountercontainer extends Component {

	handleIncQuantity = (id, quantity) => {
		this.props.handleUpdateQuantity({ id, quantity: quantity + 1 });
	};

	handleDecQuantity = (id, quantity) => {
		if (quantity > 1) {
			this.props.handleUpdateQuantity({ id, quantity: quantity - 1 });
		} else {
			this.props.handleRemoveFromCart(id);
		}
	};

	render() {
		const { id, quantity } = this.props;

		return (
			<CartCounterView
				id={id}
				quantity={quantity}
				handleDecQuantity={this.handleDecQuantity}
				handleIncQuantity={this.handleIncQuantity}
			/>
		);
	};
};

export default withCart(Cartcountercontainer);

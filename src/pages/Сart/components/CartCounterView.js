import { PureComponent } from "react";

import { ItemQuantity, CounterContainerView, CounterBtn } from "./styles";

import plus from "../../../static/imgs/plus.png";
import minus from "../../../static/imgs/minus.png";

export class CartCounterView extends PureComponent {
	render() {
		const { id, quantity, handleIncQuantity, handleDecQuantity } =
			this.props;

		return (
			<CounterContainerView>
				<CounterBtn
					onClick={() => handleIncQuantity(id, quantity)}
					type=""
				>
					<img src={plus} alt="plus" />
				</CounterBtn>
				<ItemQuantity>{quantity}</ItemQuantity>
				<CounterBtn
					onClick={() => handleDecQuantity(id, quantity)}
					type=""
				>
					<img src={minus} alt="minus" />
				</CounterBtn>
			</CounterContainerView>
		);
	};
};

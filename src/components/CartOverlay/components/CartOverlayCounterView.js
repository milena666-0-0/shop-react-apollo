import { PureComponent } from "react";

import { CounterContainer, CounterBtn, Quantity } from "./styles";

export class CartOverlayCounterView extends PureComponent {
	render() {
		const { id, quantity, handleIncQuantity, handleDecQuantity } =
			this.props;

		return (
			<CounterContainer>
				<CounterBtn
					onClick={() => {
						handleIncQuantity({
							id,
							quantity,
						});
					}}
					type=""
				>
					+
				</CounterBtn>
				<Quantity>{quantity}</Quantity>
				<CounterBtn
					onClick={() => {
						handleDecQuantity({
							id,
							quantity,
						});
					}}
					type=""
				>
					-
				</CounterBtn>
			</CounterContainer>
		);
	};
};

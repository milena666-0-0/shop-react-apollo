import { PureComponent } from "react";

import {
	Title,
	Popup,
	PopupBody,
	PopupContent,
	CloseBtn,
	BtnContainer,
	Button,
} from "./styles";

export class AttributesPopupView extends PureComponent {
	render() {
		const {
			selectedAttributes,
			popupRef,
			isOpen,
			render,
			productToAddToCart,
			handleAddToCart,
			handleCloseModal,
			onCloseModal,
		} = this.props;

		const selectedAttribute =
			selectedAttributes &&
			Object.keys(selectedAttributes).length ===
				productToAddToCart.attributes.length;


		return (
			<Popup
				onClick={(e) => handleCloseModal(e, popupRef)}
				isOpen={isOpen}
			>
				<PopupBody>
					<PopupContent ref={popupRef}>
						<CloseBtn onClick={onCloseModal}>✖</CloseBtn>
						<Title>
							Attributes are required. Please, select attributes!
						</Title>
						<div>{render()}</div>
						<BtnContainer>
							<Button
								isDisabled={!selectedAttribute}
								disabled={!selectedAttribute}
								onClick={() => {
									handleAddToCart(productToAddToCart);
									onCloseModal();
								}}
							>
								Add to cart
							</Button>
						</BtnContainer>
					</PopupContent>
				</PopupBody>
			</Popup>
		);
	}
}

import { Component, createRef } from "react";

import { AttributesPopupView } from "../components/AttributesPopupView";

class AttributesPopupContainer extends Component {
	constructor(props) {
		super(props);

		this.popupRef = createRef();
	}

	render() {
		const {
			render,
			isModalOpen,
			productToAddToCart,
			handleAddToCart,
			onCloseModal,
			handleCloseModal,
			selectedAttributes
		} = this.props;
		
		return (
			<AttributesPopupView
				popupRef={this.popupRef}
				selectedAttributes={selectedAttributes}
				productToAddToCart={productToAddToCart}
				isOpen={isModalOpen}
				render={render}
				handleCloseModal={handleCloseModal}
				onCloseModal={onCloseModal}
				handleAddToCart={handleAddToCart}
				
			/>
		);
	};
};

export default AttributesPopupContainer;

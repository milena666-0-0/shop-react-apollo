import { Component } from "react";
import { connect } from "react-redux";

import { ProductDetailsView } from "../components/ProductDetailsView";
import { SELECT_ATTRIBUTE } from "../../../actions/index";
import { ADD_TO_CART } from "../../Сart/actions/index";
import { withCart } from "../../../hoc/index";

class ProductDetailsContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedImgIndex: 0,
		};
	}

	handleSelectImg = (index) => {
		this.setState({ selectedImgIndex: index });
	};

	render() {
		const {
			selectedCurrency,
			selectedProduct,
			handleSelectAttribute,
			handleAddToCart,
		} = this.props;

		return (
			<ProductDetailsView
				selectedCurrency={selectedCurrency}
				selectedProduct={selectedProduct}
				selectedImgIndex={this.state.selectedImgIndex}
				handleSelectAttribute={handleSelectAttribute}
				handleSelectImg={this.handleSelectImg}
				handleAddToCart={handleAddToCart}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selectedCurrency: state.mainReducer.selectedCurrency,
		selectedProduct: state.mainReducer.selectedProduct,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSelectAttribute: (index) => {
			dispatch(SELECT_ATTRIBUTE(index));
		},
		handleAddToCart: (item) => dispatch(ADD_TO_CART(item)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withCart(ProductDetailsContainer));

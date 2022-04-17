import { Component } from "react";
import { connect } from "react-redux";

import { ProductCardView } from "../components/ProductCardView";
import { SELECT_PRODUCT } from "../../../actions";
import { withRouter } from "../../../hoc/index";

class ProductCardContainer extends Component {
	render() {
		const { navigate } = this.props.router;
		const { handleSelectProduct, selectedCurrency } = this.props;

		return (
			<ProductCardView
				cardData={this.props.cardData}
				navigate={navigate}
				handleSelectProduct={handleSelectProduct}
				selectedCurrency={selectedCurrency}
			/>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		selectedCurrency: state.mainReducer.selectedCurrency,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSelectProduct: (productId) => dispatch(SELECT_PRODUCT(productId)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(ProductCardContainer));

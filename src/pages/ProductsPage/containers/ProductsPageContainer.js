import { Component } from "react";
import { connect } from "react-redux";

import { ProductsPageLayout } from "../components/ProductsPageLayout";
import CartOverlayContainer from "../../../components/CartOverlay/containers/CartOverlayContainer";

class ProductsPageContainer extends Component {
	render() {
		return (
			<>
				<ProductsPageLayout
					selectedCategory={this.props.selectedCategory}
				/>
				<CartOverlayContainer />
			</>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		selectedCategory: state.mainReducer.selectedCategory,
	};
};

export default connect(mapStateToProps)(ProductsPageContainer);

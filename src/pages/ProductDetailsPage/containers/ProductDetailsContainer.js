import { Component } from "react";
import { connect } from "react-redux";

import { ProductDetailsView } from "../components/ProductDetailsView";
import { ADD_TO_CART } from "../../Сart/actions/index";
import { withCart, withRouter } from "../../../hoc/index";

class ProductDetailsContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedImgIndex: 0,
			isModalOpen: false,
			selectedAttributes: {},
		};
	}

	componentDidUpdate(prevState) {
		const { isModalOpen } = this.state;

		if (prevState !== isModalOpen) {
			document.body.style.overflowY = isModalOpen ? "hidden" : "scroll";
			document.body.style.paddingRight = isModalOpen ? "17px" : 0;
		}
	}

	handleSelectImg = (index) => {
		this.setState({ selectedImgIndex: index });
	};

	handleSelectAttribute = (attributes, attributeId, index) => {
		attributes.forEach((attribute) => {

			if (attribute.id === attributeId) {
				this.setState((state) => {
					const copy = { ...state.selectedAttributes };
					copy[attributeId] = index;

					return {
						...state,
						selectedAttributes: copy,
					};
				});
			}
		});
	};

	handleOpenModal = () => {
		this.setState({ isModalOpen: true });
	};

	onCloseModal = () => {
		this.setState({ isModalOpen: false });
	};

	handleCloseModal = (e, popupRef) => {
		if (!popupRef.current.contains(e.target)) {
			this.onCloseModal();
		}
	};

	handleAddToCart = (item) => {
		const { selectedAttributes } = this.state;

		const updatedAttributes = item.attributes.map((attribute) => {

			const updatedAttrub = attribute.items.map((item, index) => {

				return index === selectedAttributes[attribute.id]
					? { ...item, selected: true }
					: { ...item, selected: false };
			});
			return { ...attribute, items: updatedAttrub };
		});

		const copy = {
			...item,
			attributes: updatedAttributes,
		};

		const selectedAttribute = copy.attributes
			.map(({ items }) => {
				return items.find((item) => item.selected);
			})
			.every((item) => item);

		if (item.attributes.length && !selectedAttribute) {
			this.handleOpenModal();
		} else {
			this.props.onAddToCart(copy);
		}
	};

	render() {
		const {
			selectedCurrency,
			router: { params },
		} = this.props;

		return (
			<ProductDetailsView
				params={params}
				selectedAttributes={this.state.selectedAttributes}
				isModalOpen={this.state.isModalOpen}
				selectedCurrency={selectedCurrency}
				selectedImgIndex={this.state.selectedImgIndex}
				handleSelectAttribute={this.handleSelectAttribute}
				handleSelectImg={this.handleSelectImg}
				handleOpenModal={this.handleOpenModal}
				onCloseModal={this.onCloseModal}
				handleCloseModal={this.handleCloseModal}
				handleAddToCart={this.handleAddToCart}
			/>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		selectedCurrency: state.mainReducer.selectedCurrency,
		selectedProduct: state.mainReducer.selectedProduct,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddToCart: (item) => dispatch(ADD_TO_CART(item)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withCart(withRouter(ProductDetailsContainer)));

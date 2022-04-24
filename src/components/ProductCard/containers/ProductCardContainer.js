import { Component, createRef } from "react";
import { connect } from "react-redux";

import { ProductCardView } from "../components/ProductCardView";
import { ADD_TO_CART } from "../../../pages/Сart/actions/index";
import { withRouter } from "../../../hoc/index";

class ProductCardContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			selectedAttributes: {},
		};

		this.cardRef = createRef();
	}

	componentDidUpdate(prevState) {
		const { isModalOpen } = this.state;

		if (prevState !== isModalOpen) {
			document.body.style.overflowY = isModalOpen ? "hidden" : "scroll";
			document.body.style.paddingRight = isModalOpen ? "17px" : 0;
		}
	}

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

	handleAddToCart = (item) => {
		const { selectedAttributes, isModalOpen } = this.state;

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

		if (item.attributes.length) {
			this.handleOpenModal();
		} 

		if (isModalOpen && selectedAttribute) {
			this.props.onAddToCart(copy);
		}
	};

	render() {
		const { navigate } = this.props.router;
		const { cardData, selectedCurrency, refetch } = this.props;

		return (
			<ProductCardView
				cardRef={this.cardRef}
				selectedAttributes={this.state.selectedAttributes}
				isModalOpen={this.state.isModalOpen}
				cardData={cardData}
				navigate={navigate}
				selectedCurrency={selectedCurrency}
				refetch={refetch}
				handleSelectAttribute={this.handleSelectAttribute}
				onCloseModal={this.onCloseModal}
				handleAddToCart={this.handleAddToCart}
				handleCloseModal={this.handleCloseModal}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selectedCurrency: state.mainReducer.selectedCurrency,
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
)(withRouter(ProductCardContainer));

import { Component, createRef } from "react";
import { connect } from "react-redux";

import { Headerlayout } from "../components/HeaderLayout";
import {
	SELECT_CATEGORY,
	SELECT_CURRENCY,
	GET_ALL_PRODUCTS,
} from "../../../actions/index.js";

class HeaderContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isDropdownOpen: false,
			isCartOverlayOpen: false,
		};

		this.menuRef = createRef();
	}

	componentDidUpdate(prevState) {
		const { isCartOverlayOpen, isDropdownOpen } = this.state;

		if (prevState !== this.state) {
			document.body.style.overflowY =
				isCartOverlayOpen || isDropdownOpen ? "hidden" : "scroll";

			document.body.style.paddingRight =
				isCartOverlayOpen || isDropdownOpen ? "17px" : 0;
		}
	}

	componentWillUnmount() {
		document.body.style.overflow = "unset";
		document.body.style.paddingRight = 0;
	}

	handleToggleDropdown = (e) => {
		if (this.state.isCartOverlayOpen) return;

		this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
	};

	handleToggleOpenCartOverlay = () => {
		if (this.state.isDropdownOpen) return;

		this.setState({ isCartOverlayOpen: !this.state.isCartOverlayOpen });
	};

	handleCloseCartOverlay = () => {
		this.setState({ isCartOverlayOpen: false });
	};

	handleChangeCategory = (e, categoryName) => {
		const parent = e.target.parentNode;

		for (let i = 0; i < parent.childNodes.length; i++) {
			if (parent.childNodes[i].classList.contains("active")) {
				parent.childNodes[i].classList.remove("active");
			}

			e.target.classList.add("active");
		}

		this.props.handleChangeCategory(categoryName);
	};

	handleReload = () => {
		window.document.location.reload();
	};

	render() {
		const {
			selectedCurrency,
			selectedCategory,
			cart,
			handleChangeCurrency,
			getAllProducts,
		} = this.props;

		return (
			<Headerlayout
				menuRef={this.menuRef}
				cart={cart}
				isDropdownOpen={this.state.isDropdownOpen}
				isCartOverlayOpen={this.state.isCartOverlayOpen}
				selectedCurrency={selectedCurrency}
				selectedCategory={selectedCategory}
				handleToggleDropdown={this.handleToggleDropdown}
				handleCloseCartOverlay={this.handleCloseCartOverlay}
				handleToggleOpenCartOverlay={this.handleToggleOpenCartOverlay}
				handleReload={this.handleReload}
				handleChangeCategory={this.handleChangeCategory}
				handleChangeCurrency={handleChangeCurrency}
				getAllProducts={getAllProducts}
			/>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		selectedCurrency: state.mainReducer.selectedCurrency,
		selectedCategory: state.mainReducer.selectedCategory,
		cart: state.cartReducer.cart,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleChangeCategory: (categoryName) =>
			dispatch(SELECT_CATEGORY(categoryName)),
		handleChangeCurrency: (currency) => dispatch(SELECT_CURRENCY(currency)),
		getAllProducts: (products) => dispatch(GET_ALL_PRODUCTS(products)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

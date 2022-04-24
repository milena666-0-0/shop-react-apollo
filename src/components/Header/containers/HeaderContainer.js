import { Component, createRef } from "react";
import { connect } from "react-redux";

import { Headerlayout } from "../components/HeaderLayout";
import { SELECT_CATEGORY, SELECT_CURRENCY } from "../../../actions/index.js";

class HeaderContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isDropdownOpen: false,
			isCartOverlayOpen: false,
		};

		this.menuRef = createRef();
		this.dropdownRef = createRef();
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

	handleCloseDropdown = (e) => {
		if (this.dropdownRef && e.target !== this.dropdownRef.current) {
			this.setState({ isDropdownOpen: false });
		}
	};

	handleToggleDropdown = () => {
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
		const { selectedCurrency, cart, handleChangeCurrency } =
			this.props;

		return (
			<Headerlayout
				menuRef={this.menuRef}
				dropdownRef={this.dropdownRef}
				cart={cart}
				isDropdownOpen={this.state.isDropdownOpen}
				isCartOverlayOpen={this.state.isCartOverlayOpen}
				selectedCurrency={selectedCurrency}
				handleCloseDropdown={this.handleCloseDropdown}
				handleToggleDropdown={this.handleToggleDropdown}
				handleCloseCartOverlay={this.handleCloseCartOverlay}
				handleToggleOpenCartOverlay={this.handleToggleOpenCartOverlay}
				handleReload={this.handleReload}
				handleChangeCategory={this.handleChangeCategory}
				handleChangeCurrency={handleChangeCurrency}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selectedCurrency: state.mainReducer.selectedCurrency,
		cart: state.cartReducer.cart,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleChangeCategory: (categoryName) =>
			dispatch(SELECT_CATEGORY(categoryName)),
		handleChangeCurrency: (currency) => dispatch(SELECT_CURRENCY(currency)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

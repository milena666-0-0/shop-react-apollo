import { Component } from "react";

import CartOverlayContainer from "../../CartOverlay/containers/CartOverlayContainer";
import { HeaderMenu } from "./HeaderMenu";
import { Headerdropdown } from "./HeaderDropdown";
import { countAllItemsInCart } from "../../../utils/index";

import {
	FlexHeaderContainer,
	HeaderOptions,
	HeaderPic,
	CartPicContainer,
	CartBadge,
	Logo,
} from "./styles.js";

import logo from "../../../static/imgs/logo.png";
import cartPic from "../../../static/imgs/cart.png";

export class Headerlayout extends Component {
	render() {
		const {
			cart,
			menuRef,
			dropdownRef,
			isDropdownOpen,
			selectedCurrency,
			isCartOverlayOpen,
			handleCloseDropdown,
			handleToggleDropdown,
			handleChangeCategory,
			handleChangeCurrency,
			handleToggleOpenCartOverlay,
			handleCloseCartOverlay,
			handleReload,
		} = this.props;

		return (
			<FlexHeaderContainer>
				<HeaderMenu
					menuRef={menuRef}
					handleChangeCategory={handleChangeCategory}
				/>

				<Logo onClick={handleReload} src={logo} alt="logo" />

				<HeaderOptions>
					<Headerdropdown
						isDropdownOpen={isDropdownOpen}
						selectedCurrency={selectedCurrency}
						dropdownRef={dropdownRef}
						handleCloseDropdown={handleCloseDropdown}
						handleToggleDropdown={handleToggleDropdown}
						handleChangeCurrency={handleChangeCurrency}
					/>

					<CartPicContainer>
						<HeaderPic
							onClick={handleToggleOpenCartOverlay}
							src={cartPic}
							alt="cart"
						/>
						{cart.length ? (
							<CartBadge>{countAllItemsInCart(cart)}</CartBadge>
						) : null}
					</CartPicContainer>
				</HeaderOptions>
				<CartOverlayContainer
					handleCloseCartOverlay={handleCloseCartOverlay}
					isCartOverlayOpen={isCartOverlayOpen}
				/>
			</FlexHeaderContainer>
		);
	}
}

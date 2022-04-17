import { PureComponent } from "react";

import CartCartOverlayCounterContainer from "../containers/CartOverlayCounterContainer";
import { priceToShow, countTotalSum } from "../../../utils/index";
import { CartAttributes } from "../../../components/CartAttributes/index";

import {
	Container,
	ContentContainer,
	CartContentContaier,
	CartTitleContainer,
	MyBag,
	ItemsQuantity,
	ProductName,
	Price,
	Total,
	TotalPrice,
	TotalPriceContainer,
	AttributesContainer,
	Attribute,
	FilledAttribute,
	ProductImg,
	CheckOutBtn,
	ViewBagBtn,
	CartItem,
} from "./styles";

export class CartOverlayView extends PureComponent {
	render() {
		const {
			cart,
			cartWrapperRef,
			selectedCurrency,
			isCartOverlayOpen,
			handleNavigateToCart,
			handleIncQuantity,
			handleDecQuantity,
			handleCloseCartOverlay,
			onClose,
		} = this.props;

		const total = countTotalSum(cart, selectedCurrency);

		return (
			<Container
				onClick={handleCloseCartOverlay}
				isOpen={isCartOverlayOpen}
			>
				<CartContentContaier ref={cartWrapperRef}>
					<CartTitleContainer>
						<MyBag>My bag, </MyBag>
						<ItemsQuantity>{cart.length} items</ItemsQuantity>
					</CartTitleContainer>
					<div onClick={(e) => e.stopPropagation()}>
						{cart.map(
							({
								name,
								brand,
								prices,
								attributes,
								gallery,
								id,
								quantity,
							}) => (
								<CartItem key={id}>
									<div>
										<ProductName>{name}</ProductName>
										<ProductName>{brand}</ProductName>
										<Price>
											{priceToShow(
												prices,
												selectedCurrency
											)}
										</Price>
										<CartAttributes
											attributes={attributes}
											FilledAttribute={FilledAttribute}
											Attribute={Attribute}
											AttributesContainer={
												AttributesContainer
											}
										/>
									</div>
									<ContentContainer>
										<CartCartOverlayCounterContainer
											id={id}
											quantity={quantity}
											handleIncQuantity={
												handleIncQuantity
											}
											handleDecQuantity={
												handleDecQuantity
											}
										/>
										<div>
											<ProductImg
												src={gallery[0]}
												alt="pic"
											/>
										</div>
									</ContentContainer>
								</CartItem>
							)
						)}
					</div>
					<TotalPriceContainer onClick={(e) => e.stopPropagation()}>
						<Total>Total</Total>
						<TotalPrice>
							{total ? `${selectedCurrency}${total}` : total}
						</TotalPrice>
					</TotalPriceContainer>
					<ContentContainer>
						<ViewBagBtn
							onClick={() => {
								handleNavigateToCart();
								onClose();
							}}
							type=""
						>
							View bag
						</ViewBagBtn>
						<CheckOutBtn
							onClick={() => {
								onClose();
								document.body.style.overflowY = "unset";
							}}
							type=""
						>
							Check out
						</CheckOutBtn>
					</ContentContainer>
				</CartContentContaier>
			</Container>
		);
	};
};

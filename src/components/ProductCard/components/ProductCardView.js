import { PureComponent } from "react";

import { priceToShow } from "../../../utils/index";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import AttributesPopupContainer from "../../Popups/AttributesPopup/containers/AttributesPopupContainer";
import { ProductsDetailsAttribute } from "../../../pages/ProductDetailsPage/components/ProductsDetailsAttributes";

import {
	ImgContainer,
	CardContainer,
	ProductName,
	Price,
	ProductImg,
	OutOfStock,
	CartImg,
} from "./styles";

import inCart from "../../../static/imgs/inCart.png";

export class ProductCardView extends PureComponent {

	render() {
		const {
			cardRef,
			selectedAttributes,
			isModalOpen,
			cardData,
			navigate,
			handleSelectAttribute,
			selectedCurrency,
			refetch,
			handleCloseModal,
			onCloseModal,
			handleAddToCart,
		} = this.props;

		const { id, gallery, name, inStock, prices, attributes } = cardData;

		return (
			<>
				<CardContainer
					ref={cardRef}
					onClick={() => {
						navigate(`${ROUTE_NAMES.PRODUCTS}/${id}`);
					}}
					inStock={inStock}
				>
					<ImgContainer>
						<ProductImg src={gallery[0]} alt="category" />
						{inStock && (
							<CartImg
								onClick={(e) => {
									refetch();
									e.stopPropagation();
									handleAddToCart(cardData);
								}}
								src={inCart}
								alt="cart"
							/>
						)}
						<OutOfStock>Out of stock</OutOfStock>
					</ImgContainer>
					<ProductName>{name}</ProductName>
					<Price>{priceToShow(prices, selectedCurrency)}</Price>
				</CardContainer>
				<AttributesPopupContainer
					isModalOpen={isModalOpen}
					selectedAttributes={selectedAttributes}
					productToAddToCart={cardData}
					handleCloseModal={handleCloseModal}
					onCloseModal={onCloseModal}
					handleAddToCart={handleAddToCart}
					render={() =>
						attributes.map((attribute) => (
							<ProductsDetailsAttribute
								key={attribute.id}
								attribute={attribute}
								attributes={attributes}
								selectedAttributes={selectedAttributes}
								handleSelectAttribute={handleSelectAttribute}
							/>
						))
					}
				/>
			</>
		);
	}
}

import { PureComponent } from "react";

import { priceToShow } from "../../../utils/index";
import { ROUTE_NAMES } from "../../../routes/routeNames";

import {
	ImgContainer,
	CardContainer,
	ProductName,
	Price,
	ProductImg,
	OutOfStock,
} from "./styles";

export class ProductCardView extends PureComponent {

	render() {
		const { id, gallery, name, inStock, prices } = this.props.cardData;
		const { navigate, handleSelectProduct, selectedCurrency } = this.props;

		return (
			<CardContainer
				onClick={() => {
					navigate(`${ROUTE_NAMES.PRODUCTS}/${id}`);
					handleSelectProduct(id);
				}}
				inStock={inStock}
			>
				<ImgContainer>
					<ProductImg src={gallery[0]} alt="category" />
					<OutOfStock>Out of stock</OutOfStock>
				</ImgContainer>
				<ProductName>{name}</ProductName>
				<Price>{priceToShow(prices, selectedCurrency)}</Price>
			</CardContainer>
		);
	};
};


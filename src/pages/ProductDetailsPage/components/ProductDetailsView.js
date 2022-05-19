import { PureComponent } from "react";
import { Query } from "react-apollo";
import parser from "html-react-parser";

import { priceToShow } from "../../../utils/index";
import { ProductsDetailsAttribute } from "./ProductsDetailsAttributes";
import { VerticalSlider } from "../../../components/Sliders/VerticalSlider/index";
import { GET_PRODUCT_BY_ID_QUERY } from "../../../queries/getProductById";
import AttributesPopupContainer from "../../../components/Popups/AttributesPopup/containers/AttributesPopupContainer";

import {
	SliderContainer,
	ProductDetailsContainer,
	GalleryContainer,
	GalleryImg,
	SelectedImg,
	ProductName,
	ProductBrand,
	Price,
	PriceValue,
	Button,
	ProductDesc,
} from "./styles";

export class ProductDetailsView extends PureComponent {
	render() {
		const {
			params,
			selectedAttributes,
			isModalOpen,
			selectedCurrency,
			selectedImgIndex,
			handleSelectAttribute,
			handleAddToCart,
			handleSelectImg,
			onCloseModal,
			handleCloseModal,
		} = this.props;

		return (
			<Query
				query={GET_PRODUCT_BY_ID_QUERY}
				variables={{ id: params.id }}
				fetchPolicy="cache-and-network"
			>
				{({ data, loading }) => {
					if (!data || loading) return;

					const {
						name,
						brand,
						gallery,
						prices,
						description,
						inStock,
						attributes,
					} = data.product;

					return (
						<>
							<ProductDetailsContainer>
								<GalleryContainer>
									<SliderContainer>
										<VerticalSlider>
											{gallery.map((pic, index) => (
												<GalleryImg
													key={index}
													onClick={() => {
														handleSelectImg(index);
													}}
													src={pic}
													alt="pic"
												/>
											))}
										</VerticalSlider>
									</SliderContainer>

									<div>
										<SelectedImg
											src={gallery[selectedImgIndex]}
											alt="pic"
										/>
									</div>
								</GalleryContainer>
								<div>
									<ProductName>{name}</ProductName>
									<ProductBrand>{brand}</ProductBrand>
									<div>
										{attributes.map((attribute) => (
											<ProductsDetailsAttribute
												key={attribute.id}
												attribute={attribute}
												attributes={attributes}
												selectedAttributes={
													selectedAttributes
												}
												handleSelectAttribute={
													handleSelectAttribute
												}
											/>
										))}
									</div>
									<div>
										<Price>Price: </Price>
										<PriceValue>
											{priceToShow(
												prices,
												selectedCurrency
											)}
										</PriceValue>
									</div>
									<Button
										className="disabled"
										disabled={!inStock}
										isDisabled={!inStock}
										onClick={() => {
											handleAddToCart(data.product);
										}}
										type=""
									>
										{inStock
											? "Add to cart"
											: "Out of stock"}
									</Button>
									<div>
										<ProductDesc>
											{parser(description)}
										</ProductDesc>
									</div>
								</div>
							</ProductDetailsContainer>
							<AttributesPopupContainer
								isModalOpen={isModalOpen}
								selectedAttributes={selectedAttributes}
								productToAddToCart={data.product}
								onCloseModal={onCloseModal}
								handleCloseModal={handleCloseModal}
								handleAddToCart={handleAddToCart}
								render={() =>
									attributes.map((attribute) => (
										<ProductsDetailsAttribute
											key={attribute.id}
											attribute={attribute}
											attributes={attributes}
											selectedAttributes={
												selectedAttributes
											}
											handleSelectAttribute={
												handleSelectAttribute
											}
										/>
									))
								}
							/>
						</>
					);
				}}
			</Query>
		);
	}
}

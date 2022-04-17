import { PureComponent } from "react";

import { createMarkup, priceToShow } from "../../../utils/index";
import { ProductsDetailsAttribute } from "./ProductsDetailsAttributes";
import { VerticalSlider } from "../../../components/Sliders/VerticalSlider/index";

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
			selectedCurrency,
			selectedProduct,
			handleSelectAttribute,
			handleAddToCart,
			handleSelectImg,
			selectedImgIndex,
		} = this.props;

		const {
			name,
			brand,
			gallery,
			prices,
			attributes,
			description,
			inStock,
		} = selectedProduct;

		return (
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
						{attributes &&
							attributes.map((attribute) => (
								<ProductsDetailsAttribute
									key={attribute.id}
									attribute={attribute}
									handleSelectAttribute={
										handleSelectAttribute
									}
								/>
							))}
					</div>
					<div>
						<Price>Price: </Price>
						<PriceValue>
							{priceToShow(prices, selectedCurrency)}
						</PriceValue>
					</div>
					<Button
						className="disabled"
						disabled={!inStock}
						isDisabled={!inStock}
						onClick={() => handleAddToCart(selectedProduct)}
						type=""
					>
						Add to cart
					</Button>
					<div>
						<ProductDesc
							dangerouslySetInnerHTML={createMarkup(description)}
						/>
					</div>
				</div>
			</ProductDetailsContainer>
		);
	}
}

import { PureComponent, Fragment } from "react";

import { priceToShow } from "../../../utils/index";
import { SimpleSlider } from "../../../components/Sliders/SimpleSlider/index";
import CartAttributesContainer from "../../../components/CartAttributes/containers/CartAttributesContainer";
import CartCounterContainer from "../containers/CartCounterContainer";

import {
	CartTitle,
	ItemName,
	ItemBrand,
	Price,
	Seperator,
	ItemsContainer,
	ItemContainer,
	ContentContainer,
	ProductPreview,
	ProductImgContainer,
	PoductImg,
	Attribute,
	FilledAttribute,
	AttributesContainer,
	AttributeName
} from "./styles";

export class CartPageLayout extends PureComponent {
	render() {
		const { cart, selectedCurrency, handleChangeSelectedAttribute } =
			this.props;

		return (
			<>
				<CartTitle>Cart</CartTitle>
				<ItemsContainer>
					{cart &&
						cart.map(
							({
								name,
								brand,
								quantity,
								attributes,
								gallery,
								prices,
								id,
							}) => (
								<Fragment key={id}>
									<Seperator />
									<ItemContainer>
										<ContentContainer>
											<div>
												<ItemName>{name}</ItemName>
												<ItemBrand>{brand}</ItemBrand>
												<Price>
													{priceToShow(
														prices,
														selectedCurrency
													)}
												</Price>
												<CartAttributesContainer
													attributes={attributes}
													productId={id}
													FilledAttribute={
														FilledAttribute
													}
													AttributeName={AttributeName}
													Attribute={Attribute}
													AttributesContainer={
														AttributesContainer
													}
													handleChangeSelectedAttribute={
														handleChangeSelectedAttribute
													}
												/>
											</div>
											<ProductPreview>
												<CartCounterContainer
													id={id}
													quantity={quantity}
												/>
												<ProductImgContainer>
													<SimpleSlider>
														{gallery.map((img) => (
															<PoductImg
																key={img}
																src={img}
																alt="pic"
															/>
														))}
													</SimpleSlider>
												</ProductImgContainer>
											</ProductPreview>
										</ContentContainer>
									</ItemContainer>
								</Fragment>
							)
						)}
				</ItemsContainer>
			</>
		);
	}
}

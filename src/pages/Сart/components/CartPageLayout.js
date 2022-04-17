import { PureComponent, Fragment } from "react";

import { priceToShow } from "../../../utils/index";
import { SimpleSlider } from "../../../components/Sliders/SimpleSlider/index";
import { CartAttributes } from "../../../components/CartAttributes/index";
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
} from "./styles";

export class CartPageLayout extends PureComponent {
	render() {
		const { cart, selectedCurrency } = this.props;

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
												<CartAttributes
													attributes={attributes}
													FilledAttribute={
														FilledAttribute
													}
													Attribute={Attribute}
													AttributesContainer={
														AttributesContainer
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
	};
};

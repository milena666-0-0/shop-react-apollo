import { PureComponent } from "react";

import {
	ProductAttribName,
	AttributesContainer,
	Attribute,
	FilledAttribute,
} from "./styles";

export class ProductsDetailsAttribute extends PureComponent {
	render() {
		if (!this.props.attribute) return "loading";

		const {
			attributes,
			attribute: { name, items, id: attributeId, type },
			handleSelectAttribute,
			selectedAttributes,
		} = this.props;

		return (
			<>
				<ProductAttribName>{`${name}:`}</ProductAttribName>
				<AttributesContainer>
					{items.map(({ value, id }, index) =>
						type === "swatch" ? (
							<FilledAttribute
								selected={
									selectedAttributes &&
									selectedAttributes[attributeId] === index
								}
								key={id}
								value={value}
								onClick={() =>
									handleSelectAttribute(
										attributes,
										attributeId,
										index
									)
								}
							/>
						) : (
							<Attribute
								selected={
									selectedAttributes &&
									selectedAttributes[attributeId] === index
								}
								key={id}
								onClick={() =>
									handleSelectAttribute(
										attributes,
										attributeId,
										index
									)
								}
							>
								{value}
							</Attribute>
						)
					)}
				</AttributesContainer>
			</>
		);
	}
}

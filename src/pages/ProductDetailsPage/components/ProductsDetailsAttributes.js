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
			attribute: { name, items, id: attributeId, type },
			handleSelectAttribute,
		} = this.props;

		return (
			<>
				<ProductAttribName>{`${name}:`}</ProductAttribName>
				<AttributesContainer>
					{items.map(({ value, selected, id }) =>
						type === "swatch" ? (
							<FilledAttribute
								selected={selected}
								key={id}
								value={value}
								onClick={() =>
									handleSelectAttribute({
										attributeId,
										id,
									})
								}
							/>
						) : (
							<Attribute
								selected={selected}
								key={id}
								onClick={() =>
									handleSelectAttribute({
										attributeId,
										id,
									})
								}
							>
								{value}
							</Attribute>
						)
					)}
				</AttributesContainer>
			</>
		);
	};
};

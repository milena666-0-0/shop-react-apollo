import { PureComponent, Fragment } from "react";

export class CartAttributesView extends PureComponent {
	render() {
		const {
			attributes,
			AttributesContainer,
			FilledAttribute,
			Attribute,
			AttributeName,
			productId,
			handleChangeSelectedAttribute,
			...rest
		} = this.props;

		return (
			<div>
				{attributes.map(({ items, type, id: attributeId, name }) => (
					<Fragment key={attributeId}>
						<AttributeName>{name}:</AttributeName>
						<AttributesContainer>
							{items.map(({ value, id, selected }) =>
								type === "swatch" ? (
									<FilledAttribute
										{...rest}
										key={id}
										selected={selected}
										value={value}
										onClick={() =>
											handleChangeSelectedAttribute({
												attributeId,
												id,
												productId,
											})
										}
									/>
								) : (
									<Attribute
										{...rest}
										key={id}
										selected={selected}
										onClick={() =>
											handleChangeSelectedAttribute({
												attributeId,
												id,
												productId,
											})
										}
									>
										{value}
									</Attribute>
								)
							)}
						</AttributesContainer>
					</Fragment>
				))}
			</div>
		);
	}
}

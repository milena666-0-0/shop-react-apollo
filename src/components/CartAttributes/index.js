import { PureComponent } from "react";

export class CartAttributes extends PureComponent {
	render() {

		const {
			attributes,
			AttributesContainer,
			FilledAttribute,
			Attribute,
			...rest
		} = this.props;
		
		return (
			<div>
				{attributes.map(({ items, type, id }) => (
					<AttributesContainer key={id}>
						{items.map(({ value, id, selected }) =>
							type === "swatch" ? (
								<FilledAttribute
									{...rest}
									key={id}
									selected={selected}
									value={value}
								/>
							) : (
								<Attribute
									{...rest}
									key={id}
									selected={selected}
								>
									{value}
								</Attribute>
							)
						)}
					</AttributesContainer>
				))}
			</div>
		);
	};
};

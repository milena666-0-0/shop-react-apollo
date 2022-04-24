import { Component } from "react";
import { connect } from "react-redux";

import { UPDATE_SELECTED_ATTRIBUTE } from "../../../pages/Сart/actions";
import { CartAttributesView } from "../components/CartAttributesView";

class Cartattributescontainer extends Component {
	render() {
		const {
			handleChangeSelectedAttribute,
			attributes,
			productId,
			FilledAttribute,
			Attribute,
			AttributesContainer,
			AttributeName
		} = this.props;

		return (
			<CartAttributesView
				handleChangeSelectedAttribute={handleChangeSelectedAttribute}
				attributes={attributes}
				productId={productId}
				FilledAttribute={FilledAttribute}
				Attribute={Attribute}
				AttributeName={AttributeName}
				AttributesContainer={AttributesContainer}
			/>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleChangeSelectedAttribute: (index) =>
			dispatch(UPDATE_SELECTED_ATTRIBUTE(index)),
	};
};

export default connect(null, mapDispatchToProps)(Cartattributescontainer);

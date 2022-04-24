import { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import HeaderContainer from "../Header/containers/HeaderContainer";
import { Container } from "../../components/Container/index";

const StyledSection = styled.section`
	padding: 80px 0 20px;
`;

class MainLayout extends Component {
	render() {
		const { children, isCartOverlayOpen } = this.props;

		return (
			<>
				<HeaderContainer />
				<StyledSection>
					<Container open={isCartOverlayOpen}>{children}</Container>
				</StyledSection>
			</>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		isCartOverlayOpen: state.cartReducer.isCartOverlayOpen,
	};
};

export default connect(mapStateToProps)(MainLayout);

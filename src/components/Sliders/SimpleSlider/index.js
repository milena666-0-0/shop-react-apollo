import { PureComponent } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
	.slick-slider {
		position: relative;
	}
	.slick-slider > div {
		height: 100%;
	}
	.slick-track {
		display: flex;
		min-height: 100%;
	}
	.slick-list {
		overflow: hidden;
		min-height: 100%;
	}

	.slick-arrow {
		display: block;
		position: absolute;
		transform: translate(0, -50%);
		z-index: 999;
	}
	.slick-prev {
		top: 50%;
		left: 0;
	}
	.slick-next {
		top: 50%;
		right: 0;
	}
`;

const StyledBtn = styled.i`
	width: 24px;
	height: 24px;
	&:hover {
		cursor: pointer;
	}
`;

const NextBtn = (props) => {
	const { onClick, className, style } = props;

	return (
		<StyledBtn className={className} style={{ ...style }} onClick={onClick}>
			{">"}
		</StyledBtn>
	);
};

const PrevBtn = (props) => {
	const { onClick, className, style } = props;
	
	return (
		<StyledBtn className={className} style={{ ...style }} onClick={onClick}>
			{"<"}
		</StyledBtn>
	);
};

export class SimpleSlider extends PureComponent {
	render() {

		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
			nextArrow: <NextBtn />,
			prevArrow: <PrevBtn />,
		};

		return <StyledSlider {...settings}>{this.props.children}</StyledSlider>;
	};
};

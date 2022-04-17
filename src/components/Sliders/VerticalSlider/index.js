import { PureComponent } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import arr from "../../../static/imgs/arr.svg";

const SlickSlider = styled(Slider)`
	.slick-slider {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.slick-track {
		max-height: 320px;
	}
	.slick-list {
		overflow: hidden;
		width: 79px;
	}
	.slick-disabled {
		font-weight: 400;
		&:hover {
			cursor: default;
		}
	}
	.slick-arrow {
		position: absolute;
		transform: translate(-50%, 0);
		z-index: 9999;
	}
	.slick-prev {
		left: 50%;
		top: -60px;
	}

	.slick-next {
		left: 50%;
	}
`;

const StyledtBtn = styled.span`
	height: 25px;
	width: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	&:hover {
		cursor: pointer;
	}
`;

const NextBtn = (props) => {
	const { onClick, className, styles } = props;

	return (
		<StyledtBtn
			className={className}
			style={{ ...styles }}
			onClick={onClick}
			src={arr}
			alt="more"
		>
			{"˅"}
		</StyledtBtn>
	);
};

const PrevBtn = (props) => {
	const { onClick, className, styles } = props;

	return (
		<StyledtBtn
			className={className}
			style={{ ...styles }}
			onClick={onClick}
			src={arr}
			alt="more"
		>
			{"˄"}
		</StyledtBtn>
	);
};

export class VerticalSlider extends PureComponent {
	render() {
		const settings = {
			initialSlide: 0,
			infinite: false,
			slidesToScroll: 1,
			slidesToShow: 3,
			swipeToSlide: true,
			vertical: true,
			arrows: true,
			draggable: false,
			nextArrow: <NextBtn />,
			prevArrow: <PrevBtn />,
		};

		return <SlickSlider {...settings}>{this.props.children}</SlickSlider>;
	};
};

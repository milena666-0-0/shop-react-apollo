import styled from "styled-components";

import inCart from "../../../static/imgs/inCart.png";

const CardContainer = styled.div`
	position: relative;
	background: #fff;
	margin-bottom: 103px;
	transition: all 0.3s;
	max-width: 386px;
	width: 100%;
	padding: 16px;
	&:hover {
		cursor: pointer;
		${(props) =>
			props.inStock
				? {
						boxShadow: "0px 4px 35px rgba(168, 172, 176, 0.19);",
						"&:after": {
							content: `url(${inCart})`,
							position: "absolute",
							right: "31px",
							bottom: "72px",
							width: "52px",
							height: "52px",
						},
				  }
				: {
						"&": {
							opacity: "0.5",
						},
						"& span": {
							visibility: "visible",
						},
				  }}
	}
`;

const ImgContainer = styled.div`
	position: relative;
`;

const OutOfStock = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: 400;
	font-size: 24px;
	text-transform: uppercase;
	line-height: 160%;
	color: #8d8f9a;
	visibility: hidden;
`;

const ProductName = styled.p`
	font-weight: 300;
	font-size: 18px;
	line-height: 160%;
	color: #1d1f22;
`;

const Price = styled.p`
	font-weight: 500;
	font-size: 18px;
	line-height: 160%;
	color: #1d1f22;
`;

const ProductImg = styled.img`
	width: 100%;
	max-height: 330px;
	height: 100%;
	margin-bottom: 24px;
`;

export {
	CardContainer,
	ProductName,
	Price,
	ProductImg,
	OutOfStock,
	ImgContainer,
};

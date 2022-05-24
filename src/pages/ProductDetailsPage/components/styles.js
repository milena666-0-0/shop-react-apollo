import styled from "styled-components";

const ProductDetailsContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`;

const GalleryContainer = styled.div`
	display: flex;
	margin-right: 100px;
`;

const SliderContainer = styled.div`
	position: relative;
	margin-top: 60px;
`;

const GalleryImg = styled.img`
	height: 80px;
	object-fit: contain;
	width: 100%;
	margin-bottom: 40px;
	&:hover {
		cursor: pointer;
	}
`;

const SelectedImg = styled(GalleryImg)`
	width: 610px;
	object-fit: contain;
	height: 511px;
	margin-left: 40px;
`;

const ProductName = styled.h3`
	font-weight: 600;
	font-size: 30px;
	line-height: 27px;
	color: #1d1f22;
	margin-bottom: 16px;
`;

const ProductBrand = styled(ProductName)`
	font-weight: 400;
	margin-bottom: 43px;
`;

const ProductAttribName = styled.p`
	font-weight: 700;
	font-size: 18px;
	line-height: 18px;
	color: #1d1f22;
	text-transform: uppercase;
	margin-bottom: 8px;
`;

const Price = styled(ProductAttribName)`
	margin-bottom: 20px;
`;

const PriceValue = styled.p`
	font-weight: 700;
	font-size: 24px;
	line-height: 18px;
	color: #1d1f22;
`;

const AttributesContainer = styled.div`
	display: flex;
	margin-bottom: 40px;
`;

const Attribute = styled.div`
	width: 63px;
	height: 45px;
	border: 1px solid #1d1f22;
	font-weight: 400;
	font-size: 16px;
	line-height: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 0.05em;
	margin-right: 12px;
	background: ${(props) => (props.selected ? "#1D1F22" : "#fff")};
	color: ${(props) => (props.selected ? "#fff" : "#292929")};
	&:last-child {
		margin-right: 0;
	}
	&:hover {
		cursor: pointer;
	}
`;

const FilledAttribute = styled(Attribute)`
	border: ${(props) => (props.selected ? "3px solid red" : "none")};
	background: ${(props) => props.value};
	color: transparent;
	&:last-child {
		border: ${(props) =>
			props.selected ? "3px solid red" : "1px solid #1D1F22"};
	}
`;

const Button = styled.button`
	transition: all 0.3s;
	font-weight: 600;
	font-size: 16px;
	line-height: 120%;
	color: ${(props) => (props.isDisabled ? "#A6A6A6" : "#ffffff")};
	text-align: center;
	text-transform: uppercase;
	width: 292px;
	height: 52px;
	background: ${(props) => (props.isDisabled ? "#f2f2f2" : "#5ece7b")};
	border: none;
	outline: none;
	margin: 30px 0 40px;
	&:hover {
		cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
		background-color: ${(props) =>
			props.isDisabled ? "#f2f2f2" : "#3e8e41"};
	}
	${(props) =>
		!props.isDisabled && {
			"&:active": {
				boxShadow: "0 5px #e6e6e6",
				backgroundColor: "#3e8e41",
				transform: "translateY(4px)",
			},
		}}
`;

const ProductDesc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 159.96%;
	color: #1d1f22;
	max-width: 292px;
`;

export {
	SliderContainer,
	ProductDetailsContainer,
	GalleryContainer,
	GalleryImg,
	SelectedImg,
	ProductName,
	ProductBrand,
	ProductAttribName,
	Price,
	PriceValue,
	AttributesContainer,
	Attribute,
	FilledAttribute,
	Button,
	ProductDesc,
};

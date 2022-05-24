import styled from "styled-components";

const CartTitle = styled.h2`
	font-weight: 700;
	font-size: 32px;
	line-height: 40px;
	text-transform: uppercase;
	color: #1d1f22;
	margin-bottom: 60px;
`;

const ItemName = styled.p`
	font-weight: 600;
	font-size: 30px;
	line-height: 27px;
	color: #1d1f22;
	margin-bottom: 16px;
`;

const ItemBrand = styled(ItemName)`
	font-weight: 400;
	margin-bottom: 12px;
`;

const Price = styled(ItemName)`
	font-weight: 700;
	font-size: 24px;
	line-height: 18px;
	margin: 12px 0 24px;
`;

const ItemQuantity = styled(ItemName)`
	font-weight: 500;
	font-size: 24px;
	line-height: 160%;
`;

const Seperator = styled.div`
	width: 100%;
	height: 1px;
	background: #e5e5e5;
`;

const ItemsContainer = styled.div`
	max-width: 1098px;
	width: 100%;
`;

const ItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 100%;
	margin: 20px 0;
`;

const Attribute = styled.div`
	width: 63px;
	height: 45px;
	font-weight: 400;
	font-size: 16px;
	line-height: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 0.05em;
	background: ${(props) => (props.selected ? "#1D1F22" : "#fff")};
	color: ${(props) => (props.selected ? "#fff" : "#1D1F22")};
	border: 1px solid #1d1f22;
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

const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const AttributesContainer = styled(ContentContainer)`
	justify-content: flex-start;
	margin-bottom: 10px;
	& > div {
		margin-right: 12px;
		&:last-child {
			margin-right: 0;
		}
	}
`;

const CounterContainerView = styled(ContentContainer)`
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
`;

const ProductPreview = styled.div`
	display: flex;
	align-items: center;
`;

const ProductImgContainer = styled.div`
	position: relative;
	max-width: 141px;
	height: auto;
	margin-left: 12px;
`;

const PoductImg = styled.img`
	height: 100%;
	object-fit: contain;
`;

const CounterBtn = styled.button`
	width: 45px;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #1d1f22;
	background: transparent;
	&:hover {
		cursor: pointer;
	}
`;

const AttributeName = styled.div`
	font-weight: 500;
	font-size: 20px;
	margin: 27px 0 5px;
`;

export {
	CartTitle,
	ItemName,
	ItemBrand,
	Price,
	ItemQuantity,
	Seperator,
	ItemsContainer,
	ItemContainer,
	Attribute,
	FilledAttribute,
	AttributesContainer,
	ContentContainer,
	CounterContainerView,
	CounterBtn,
	ProductPreview,
	ProductImgContainer,
	PoductImg,
	AttributeName,
};

import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 78px;
	right: 0;
	display: ${(props) => (props.isOpen ? "block" : "none")};
	overflow-y: ${(props) => (props.isOpen ? "hidden" : "auto")};
	z-index: 9999;
	background: rgba(57, 55, 72, 0.22);
`;

const CartContentContaier = styled.div`
	max-height: 540px;
	overflow-y: auto;
	position: relative;
	margin: 0 87px 0 auto;
	padding: 9px 16px 19px;
	transition: opacity 500ms;
	width: 345px;
	background: #ffff;
	transition: all 5s ease-in-out;
`;

const ContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CartItem = styled(ContentContainer)`
	margin-bottom: 42px;
	height: 100%;
`;

const CartTitleContainer = styled.div`
	margin-bottom: 23px;
`;

const MyBag = styled.span`
	font-weight: 700;
	font-size: 16px;
	line-height: 160%;
	color: #1d1f22;
`;

const ItemsQuantity = styled(MyBag)`
	font-weight: 500;
`;

const ProductName = styled(MyBag)`
	display: block;
	font-weight: 300;
`;

const Price = styled(MyBag)`
	font-weight: 500;
	display: inline-block;
	margin-top: 5px;
`;

const Total = styled(MyBag)`
	font-weight: 500;
`;

const TotalPrice = styled(MyBag)`
	font-weight: 700;
`;

const TotalPriceContainer = styled(ContentContainer)`
	margin-bottom: 35px;
`;

const AttributesContainer = styled.div`
	display: flex;
	& > div {
		margin-right: 8px;
		&:last-child {
			margin-right: 0;
		}
	}
`;

const Attribute = styled.div`
	min-width: 24px;
	min-height: 24px;
	font-weight: 400;
	font-size: 14px;
	line-height: 160%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(props) =>
		props.selected ? "#fff" : " rgba(166, 166, 166, 0.2);"};
	color: ${(props) => (props.selected ? "#1d1f22 " : "#A6A6A6")};
	border: ${(props) =>
		props.selected ? "1px solid #1d1f22" : " 1px solid #A6A6A6;"};
	&:hover {
		cursor: pointer;
	}
`;

const FilledAttribute = styled(Attribute)`
	background: ${(props) => props.value};
	opacity: ${(props) => (props.selected ? 1 : 0.5)};
`;

const ProductImg = styled.img`
	width: 105px;
	height: 100%;
	object-fit: contain;
`;

const CounterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	margin-right: 10px;
`;

const CounterBtn = styled.button`
	border: 1px solid #1d1f22;
	font-size: 25px;
	outline: none;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
	background: transparent;
	&:hover {
		cursor: pointer;
	}
`;

const Quantity = styled(MyBag)`
	font-weight: 500;
`;

const ViewBagBtn = styled.button`
	max-width: 140px;
	width: 100%;
	height: 43px;
	font-weight: 600;
	font-size: 14px;
	line-height: 120%;
	text-transform: uppercase;
	color: #1d1f22;
	border: 1px solid #1d1f22;
	background: #fff;
	&:hover {
		cursor: pointer;
	}
`;

const CheckOutBtn = styled(ViewBagBtn)`
	background: #5ece7b;
	color: #ffffff;
	border: none;
`;

const AttributeName = styled.div`
	font-weight: 500;
	margin: 27px 0 5px;
	font-size: 15px;
`;

export {
	Container,
	CartContentContaier,
	ContentContainer,
	CartTitleContainer,
	MyBag,
	CartItem,
	ItemsQuantity,
	ProductName,
	Price,
	Total,
	TotalPrice,
	TotalPriceContainer,
	AttributesContainer,
	Attribute,
	FilledAttribute,
	ProductImg,
	CounterContainer,
	CounterBtn,
	Quantity,
	CheckOutBtn,
	ViewBagBtn,
	AttributeName,
};

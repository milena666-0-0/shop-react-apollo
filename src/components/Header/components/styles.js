import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "../../Container/index";

import moreArr from "../../../static/imgs/more-arr.png";

const FlexHeaderContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	& > *:first-child {
		align-self: flex-end;
	}
`;

const Logo = styled.img`
	&:hover {
		cursor: pointer;
	}
`;

const NavMenu = styled.ul`
	display: flex;
	list-style-type: none;
`;

const MenuLi = styled(Link)`
	position: relative;
	text-decoration: none;
	text-transform: uppercase;
	color: #1d1f22;
	margin: 0 16px;
	height: 56px;
	padding-top: 4px;
	&.active {
		color: #5ece7b;
	}
	&:hover {
		cursor: pointer;
	}
	&.active:after {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		background: #5ece7b;
		bottom: 0;
		left: 0;
	}
`;

const HeaderOptions = styled.div`
	display: flex;
	min-width: 204px;
	justify-content: flex-end;
`;

const CurrencyDropdown = styled.div`
	position: relative;
`;

const CurrencyPreview = styled.div`
	display: flex;
	align-items: center;
	transition: all 0.3s;
	&:hover {
		cursor: pointer;
	}
	&:after {
		content: url(${moreArr});
		transform: translateY(-2px)
			${(props) => (props.open ? "rotate(180deg)" : "rotate(0)")};
	}
`;

const Currency = styled.span`
	margin-right: 10px;
`;

const CurrencyDropdownOptions = styled.ul`
	position: absolute;
	top: 130%;
	left: -70%;
	transition: all 0.2s;
	padding: 20px 20px 20px;
	list-style-type: none;
	min-width: 114px;
	width: 100%;
	background: #fff;
	display: ${(props) => (props.open ? "block" : "none")};
	&:hover {
		filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
	}
`;

const CurrencyOption = styled.li`
	font-weight: 500;
	font-size: 18px;
	line-height: 160%;
	color: #1d1f22;
	margin-bottom: 21px;
	&:last-child {
		margin-bottom: 0;
	}
	&:hover {
		cursor: pointer;
	}
`;

const HeaderPic = styled.img`
	margin-left: 22px;
	&:hover {
		cursor: pointer;
	}
`;

const CartPicContainer = styled.div`
	position: relative;
`;

const CartBadge = styled.div`
	position: absolute;
	top: -10px;
	right: -15px;
	border-radius: 50%;
	min-width: 20px;
	min-height: 20px;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	text-align: center;
	color: #ffffff;
	background: #1d1f22;
	z-index: 999;
`;

export {
	Logo,
	FlexHeaderContainer,
	NavMenu,
	MenuLi,
	HeaderOptions,
	CurrencyDropdown,
	CurrencyPreview,
	Currency,
	CurrencyDropdownOptions,
	CurrencyOption,
	HeaderPic,
	CartPicContainer,
	CartBadge,
};

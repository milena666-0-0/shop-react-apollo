import styled from "styled-components";

const Popup = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background: rgba(57, 55, 72, 0.22);
	display: ${(props) => (props.isOpen ? "block" : "none")};
	z-index: 99999;
`;

const PopupBody = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	juatify-content: center;
`;

const PopupContent = styled.div`
	position: relative;
	background: #fff;
	max-width: 500px;
	width: 100%;
	min-height: 250px;
	margin: auto;
	border-radius: 4px;
	box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
	padding: 30px;
`;

const Title = styled.p`
	font-weight: 500;
	font-size: 18px;
	line-height: 160%;
	margin-bottom: 10px;
`;

const CloseBtn = styled.span`
	position: absolute;
	right: 15px;
	top: 10px;
	&:hover {
		cursor: pointer;
	}
`;

const BtnContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	transition: all 0.3s;
	font-weight: 600;
	font-size: 16px;
	line-height: 120%;
	color: #ffffff;
	text-align: center;
	text-transform: uppercase;
	width: 292px;
	height: 52px;
	background: ${(props) => (props.isDisabled ? "#f2f2f2" : "#5ece7b")};
	border: none;
	outline: none;
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

export {
	Title,
	Popup,
	PopupBody,
	PopupContent,
	CloseBtn,
	BtnContainer,
	Button,
};

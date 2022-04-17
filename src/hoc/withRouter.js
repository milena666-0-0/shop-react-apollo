import { useLocation, useNavigate, useParams } from "react-router-dom";

export const withRouter = (WrappedComponent) => (props) => {
	let location = useLocation();
	let navigate = useNavigate();
	let params = useParams();

	return <WrappedComponent {...props} router={{ location, navigate, params }} />;
};

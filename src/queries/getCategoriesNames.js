import { gql } from "@apollo/client";

const GET_CATEGORIES_NAMES_QUERY = gql`
	query Categories {
		categories {
			name
		}
	}
`;

export { GET_CATEGORIES_NAMES_QUERY };

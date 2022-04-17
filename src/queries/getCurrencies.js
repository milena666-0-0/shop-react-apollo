import { gql } from "@apollo/client";

const GET_CURRENCIES_QUERY = gql`
	query Currency {
		currencies {
			label
			symbol
		}
	}
`;

export { GET_CURRENCIES_QUERY };

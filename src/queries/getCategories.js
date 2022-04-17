import { gql } from "@apollo/client";

const GET_CATEGORIES_QUERY = gql`
	query Categories {
		categories {
			name
			products {
				id
				name
				inStock
				gallery
				description
				category
				prices {
					currency {
						label
						symbol
					}
					amount
				}
				attributes {
					id
					name
					type
					items {
						displayValue
						value
						id
					}
				}
				brand
			}
		}
	}
`;

export { GET_CATEGORIES_QUERY };

import { gql } from "@apollo/client";

const GET_CATEGORY_QUERY = gql`
	query Category($input: CategoryInput) {
		category(input: $input) {
			name
			products {
				id
				name
				inStock
				gallery
				prices {
					currency {
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
			}
		}
	}
`;

export { GET_CATEGORY_QUERY };

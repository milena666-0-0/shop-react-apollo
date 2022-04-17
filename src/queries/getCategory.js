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
			}
		}
	}
`;

export { GET_CATEGORY_QUERY };

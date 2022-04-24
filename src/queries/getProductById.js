import { gql } from "@apollo/client";

const GET_PRODUCT_BY_ID_QUERY = gql`
	query product($id: String!) {
		product(id: $id) {
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
`;

export { GET_PRODUCT_BY_ID_QUERY };

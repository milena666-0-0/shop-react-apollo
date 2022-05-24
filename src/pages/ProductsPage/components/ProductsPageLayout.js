import { Component } from "react";
import { Query } from "react-apollo";

import { GET_CATEGORY_QUERY } from "../../../queries/index";
import ProductCardContainer from "../../../components/ProductCard/containers/ProductCardContainer";
import { transformFirstCharToUp } from "../../../utils/index";

import { ProductsContainer, CategoryName } from "./styles";

export class ProductsPageLayout extends Component {
	render() {
		const { selectedCategory } = this.props;

		return (
			<Query
				query={GET_CATEGORY_QUERY}
				variables={{ input: { title: selectedCategory } }}
				fetchPolicy="no-cache"
				nextFetchPolicy="cache-first"
			>
				{({ data, loading }) => {
					if (!data || loading) return;
					console.log(data);

					return (
						<>
							<CategoryName>
								{data &&
									transformFirstCharToUp(data.category.name)}
							</CategoryName>

							<ProductsContainer>
								{data &&
									data.category.products.map((product) => {
										return (
											<ProductCardContainer
												key={product.id}
												cardData={product}
											/>
										);
									})}
							</ProductsContainer>
						</>
					);
				}}
			</Query>
		);
	}
}

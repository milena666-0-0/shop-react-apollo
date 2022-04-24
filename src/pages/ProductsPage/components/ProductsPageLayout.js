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
				variables={{ input: { title: selectedCategory || "all" } }}
			>
				{({ data, loading, refetch }) => {
					
					if (!data || loading) return;
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
												refetch={refetch}
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

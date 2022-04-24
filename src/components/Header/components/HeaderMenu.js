import { PureComponent } from "react";
import { Query } from "react-apollo";

import { GET_CATEGORIES_QUERY } from "../../../queries/index";
import { ROUTE_NAMES } from "../../../routes/routeNames";

import { NavMenu, MenuLi } from "./styles.js";

export class HeaderMenu extends PureComponent {
	render() {
		const { menuRef, handleChangeCategory } = this.props;

		return (
			<nav>
				<NavMenu>
					<Query query={GET_CATEGORIES_QUERY}>
						{({ data, loading }) => {
							if (loading || !data) return;

							return (
								<>
									{data.categories.map(({ name }) => (
										<MenuLi
											ref={menuRef}
											to={ROUTE_NAMES.HOME}
											key={name}
											onClick={(e) => {
												handleChangeCategory(e, name);
											}}
										>
											{name}
										</MenuLi>
									))}
								</>
							);
						}}
					</Query>
				</NavMenu>
			</nav>
		);
	}
}

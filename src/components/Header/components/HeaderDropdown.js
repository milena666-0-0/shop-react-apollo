import { PureComponent } from "react";
import { Query } from "react-apollo";

import { GET_CURRENCIES_QUERY } from "../../../queries/index";

import {
	CurrencyDropdown,
	CurrencyPreview,
	Currency,
	CurrencyDropdownOptions,
	CurrencyOption,
} from "./styles.js";

export class Headerdropdown extends PureComponent {
	render() {
		const {
			dropDownRef,
			isDropdownOpen,
			selectedCurrency,
			handleToggleDropdown,
			handleChangeCurrency,
		} = this.props;

		return (
			<Query query={GET_CURRENCIES_QUERY}>
				{({ data }) => (
					<CurrencyDropdown ref={dropDownRef}>
						<CurrencyPreview
							open={isDropdownOpen}
							onClick={handleToggleDropdown}
						>
							<Currency>{selectedCurrency || "$"}</Currency>
						</CurrencyPreview>
						<CurrencyDropdownOptions open={isDropdownOpen}>
							{data &&
								data.currencies.map(({ label, symbol }) => (
									<CurrencyOption
										key={label}
										onClick={() => {
											handleChangeCurrency(symbol);
											handleToggleDropdown();
										}}
									>
										{symbol} {label}
									</CurrencyOption>
								))}
						</CurrencyDropdownOptions>
					</CurrencyDropdown>
				)}
			</Query>
		);
	}
}

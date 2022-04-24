import { PureComponent } from "react";
import { Query } from "react-apollo";

import { GET_CURRENCIES_QUERY } from "../../../queries/index";

import {
	CurrencyDropdownContainer,
	CurrencyDropdown,
	CurrencyPreview,
	Currency,
	CurrencyDropdownOptions,
	CurrencyOption,
} from "./styles.js";

export class Headerdropdown extends PureComponent {
	render() {
		const {
			dropdownRef,
			isDropdownOpen,
			selectedCurrency,
			handleCloseDropdown,
			handleToggleDropdown,
			handleChangeCurrency,
		} = this.props;

		return (
			<Query query={GET_CURRENCIES_QUERY}>
				{({ data }) => (
					<CurrencyDropdown>
						<CurrencyPreview
							open={isDropdownOpen}
							onClick={handleToggleDropdown}
						>
							<Currency>{selectedCurrency || "$"}</Currency>
						</CurrencyPreview>
						<CurrencyDropdownContainer
							open={isDropdownOpen}
							onClick={(e) => handleCloseDropdown(e)}
						>
							<CurrencyDropdownOptions
								ref={dropdownRef}
								open={isDropdownOpen}
							>
								{data &&
									data.currencies.map(({ label, symbol }) => (
										<CurrencyOption
											key={label}
											onClick={() =>
												handleChangeCurrency(symbol)
											}
										>
											{symbol} {label}
										</CurrencyOption>
									))}
							</CurrencyDropdownOptions>
						</CurrencyDropdownContainer>
					</CurrencyDropdown>
				)}
			</Query>
		);
	}
}

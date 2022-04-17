export const priceToShow = (prices, selectedCurrency = '$') => {

	return prices.map(({ currency, amount }) => {

		if (currency.symbol === selectedCurrency) {
			return `${currency.symbol}${Math.ceil(amount)}`;
		}

	});
};

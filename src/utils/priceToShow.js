export const priceToShow = (prices, selectedCurrency = '$') => {

	return prices.forEach(({ currency, amount }) => {

		if (currency.symbol === selectedCurrency) {
			return `${currency.symbol}${amount.toFixed(2)}`;
		}

	});
};

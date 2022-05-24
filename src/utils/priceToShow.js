export const priceToShow = (prices, selectedCurrency = "$") => {

	for (let i = 0; i < prices.length; i++) {

		if (prices[i].currency.symbol === selectedCurrency) {
			return `${prices[i].currency.symbol}${prices[i].amount.toFixed(2)}`;
		}
		
	}
};

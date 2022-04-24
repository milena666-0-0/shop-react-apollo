export const countTotalSum = (products, selectedCurrency = "$") => {
	const arrayOfPrices = products.map((item) => {
		const selectedPrice = item.prices.find(
			(price) => price.currency.symbol === selectedCurrency
		);

		const total = +selectedPrice.amount * item.quantity;

		return total;
	});

	return arrayOfPrices.reduce((sum, price) => {
		return (parseFloat(sum) + parseFloat(price)).toFixed(2);
	}, 0);
};

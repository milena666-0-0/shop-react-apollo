export const countUniqueItems = (arrOfItems) => {
	const uniqueItems = arrOfItems.reduce((acc, item, index) => {

		const id = item.id.split("#")[0];

		if (acc[index] === id) {
			return false;
		}

		acc[id] = index;
		return acc;
		
	}, {});

	return Object.keys(uniqueItems).length;
};

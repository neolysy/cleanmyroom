var availableCleanersList = function() {
	let url = '/mock/availableCleaners.json';

	return fetch(url).then(res => res.json());
}

export { availableCleanersList };
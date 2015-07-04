var getAvailableCleanersList = function() {
	let url = '/mock/availableCleaners.json';

	return fetch(url).then(res => res.json());
}

var getUserProfile = function() {
	let url = '/mock/userProfile.json';

	return fetch(url).then(res => res.json());
}


export { 
	getAvailableCleanersList, 
	getUserProfile 
};
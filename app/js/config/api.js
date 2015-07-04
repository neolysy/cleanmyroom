var getAvailableCleanersList = function() {
	let url = '/mock/availableCleaners.json';

	return fetch(url).then(res => res.json());
}

var getUserProfile = function(id) {
	let url = '/mock/users.json';

	return fetch(url).then(res => res.json())
		.then( list => {
			return list.filter( p => p.id == id );
		});
}

var getUsers = function(id) {
	let url = '/mock/users.json';

	return fetch(url).then(res => res.json());
}


export { 
	getAvailableCleanersList, 
	getUserProfile,
	getUsers
};
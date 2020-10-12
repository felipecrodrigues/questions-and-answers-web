import http from '../infra/http-common';

const getAll = () => {
	console.log('CALLING GETALL');
	return http.get('/question');
};

const get = (id) => {
	console.log('CALLING GET');
	return http.get(`/question/${id}`);
};

const save = (data) => {
	console.log('CALLING SAVE');
	return http.post('/question', data);
};

export default {
	getAll,
	get,
	save,
};

import { SWAPI_PARAM_PAGE, SWAPI_PEOPLE, SWAPI_API } from '../constants/api';

const getId = (url, category) => {
	const id = url.replace(SWAPI_API + category, '').replace(/\//g, '');

	return id;
};

export const getPeoplePageId = url => {
	const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
	const id = url.slice(pos + SWAPI_PARAM_PAGE.length);

	return Number(id);
};

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

import { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import PeopleList from '../../components/PeopleList/PeopleList';
import PeopleNavigation from '../../components/PeopleNavigation/PeopleNavigation';
import UiLoad from '../../components/UI/UILoad/UILoad';
import { API_PEOPLE } from '../../constants/api';
import { useQueryParams } from '../../hooks/useQueryParams';
import { getPeopleId, getPeoplePageId } from '../../services/getPeopleData';
import { getApi } from '../../utils/network';

const People = () => {
	const [people, setPeople] = useState([]);
	const [isErrorApi, setIsErrorApi] = useState(false);
	const [prevPage, setPrevPage] = useState();
	const [nextPage, setNextPage] = useState();
	const [counterPage, setCounterPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	const queryParams = useQueryParams();
	const queryPage = queryParams.get('page');

	const getResource = async url => {
		try {
			setIsLoading(true);

			const { results, next, previous } = await getApi(url);
			if (results) {
				const peopleList = results.map(({ name, url }) => {
					const id = getPeopleId(url);

					return {
						id,
						name,
					};
				});

				setIsErrorApi(false);
				setPeople(peopleList);
				setPrevPage(previous);
				setNextPage(next);
				setCounterPage(getPeoplePageId(url));
				setIsLoading(false);
			} else {
				setIsErrorApi(true);
			}
		} catch (error) {
			setIsErrorApi(true);
		}
	};

	useEffect(() => {
		getResource(API_PEOPLE + queryPage);
	}, [queryPage]);

	return (
		<>
			{isErrorApi ? (
				<ErrorMessage />
			) : people.length === 0 && isLoading ? (
				<UiLoad />
			) : (
				<>
					<PeopleNavigation
						prevPage={prevPage}
						nextPage={nextPage}
						counterPage={counterPage}
						getResource={getResource}
					/>
					<PeopleList people={people} counterPage={counterPage} />
				</>
			)}
		</>
	);
};

export default People;

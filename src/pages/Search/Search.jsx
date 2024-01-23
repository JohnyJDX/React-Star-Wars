import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SearchInfo from '../../components/SearchInfo/SearchInfo';
import UIInput from '../../components/UI/UIInput/UIInput';
import UILoad from '../../components/UI/UILoad/UILoad';
import { API_SEARCH } from '../../constants/api';
import { getPeopleId } from '../../services/getPeopleData';
import { getApi } from '../../utils/network';
import s from './Search.module.css';

const Search = () => {
	const [inputValue, setInputValue] = useState('');
	const [isErrorApi, setIsErrorApi] = useState(false);
	const [people, setPeople] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const debounceGetRes = useCallback(
		debounce(async value => {
			try {
				setIsLoading(true);
				const res = await getApi(API_SEARCH + value);
				const peopleList = res.results.map(({ name, url }) => ({
					name,
					url,
					id: getPeopleId(url),
				}));
				setPeople(peopleList);
				setIsErrorApi(false);
				setIsLoading(false);
			} catch (error) {
				setIsErrorApi(true);
			}
		}, 800),
		[]
	);

	const handleInputChange = e => {
		const value = e.target.value;
		setInputValue(value);
		debounceGetRes(value);
	};

	const handleClearInput = () => {
		setInputValue('');
		setPeople(null);
	};

	return (
		<>
			<h1 className="title">Search</h1>
			<div className={s.input}>
				<UIInput
					value={inputValue}
					handleInputChange={handleInputChange}
					placeholder="Enter character name"
					className={s.search}
				/>
				{inputValue && (
					<div className={s.clear} onClick={handleClearInput}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 50 50"
							width="20px"
							height="20px"
						>
							<path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
						</svg>
					</div>
				)}
			</div>
			{isLoading && <UILoad />}
			{people?.length > 0 && <SearchInfo people={people} />}
			{people?.length === 0 && (
				<p className={s.text}>This character was not found</p>
			)}
			{isErrorApi && <ErrorMessage />}
		</>
	);
};

export default Search;
2;

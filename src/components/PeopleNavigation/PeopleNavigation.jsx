import { func, number, string } from 'prop-types';
import { Link } from 'react-router-dom';
import s from './PeopleNavigation.module.css';
import UIButton from '../UI/UIButton/UIButton';

const PeopleNavigation = ({ prevPage, nextPage, counterPage, getResource }) => {
	const handlePrevPage = () => {
		getResource(prevPage);
	};

	const handleNextPage = () => {
		getResource(nextPage);
	};

	return (
		<div className={s.btns}>
			<Link to={`?page=${counterPage - 1}`}>
				<UIButton onClick={handlePrevPage} disabled={!prevPage} text={'Prev'} />
			</Link>
			<Link to={`?page=${counterPage + 1}`}>
				<UIButton onClick={handleNextPage} disabled={!nextPage} text={'Next'} />
			</Link>
		</div>
	);
};

PeopleNavigation.propTypes = {
	getResource: func,
	prevPage: string,
	nextPage: string,
	counterPage: number,
};

export default PeopleNavigation;

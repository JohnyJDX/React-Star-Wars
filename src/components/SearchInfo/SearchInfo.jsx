import PropTypes from 'prop-types';
import PeopleList from '../PeopleList/PeopleList';

const SearchInfo = ({ people }) => {
	return (
		<>
			{people.length !== 0 ? (
				<PeopleList people={people} />
			) : (
				<h2>No results</h2>
			)}
		</>
	);
};

SearchInfo.propTypes = {
	people: PropTypes.array,
};

export default SearchInfo;

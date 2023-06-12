import { Link } from 'react-router-dom';
import s from './PeopleList.module.css';
import PropTypes from 'prop-types';

const PeopleList = ({ people }) => {
	return (
		<ul className={s.list}>
			{people.map(({ name, id }) => (
				<li className={s.item} key={id}>
					<Link to={`/React-Star-Wars/people/${id}`}>
						<img
							className={s.img}
							src={`/React-Star-Wars/img/characters/${id}.jpg`}
							alt={name}
						/>
						<h4 className={s.name}>{name}</h4>
					</Link>
				</li>
			))}
		</ul>
	);
};

PeopleList.propTypes = {
	people: PropTypes.array,
};

export default PeopleList;

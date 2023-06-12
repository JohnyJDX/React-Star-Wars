import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import s from './PersonFilms.module.css';
import { makeConcurrentRequests } from '../../utils/network';

const PersonFilms = ({ personFilms }) => {
	const [films, setFilms] = useState([]);

	const fetchFilms = async () => {
		const res = await makeConcurrentRequests(personFilms);
		const filmsData = res.map(({ data }) => data);
		setFilms(filmsData);
	};

	useEffect(() => {
		fetchFilms();
	}, []);

	return (
		<div className={s.wrapper}>
			<ul>
				{films
					.sort((a, b) => a.episode_id - b.episode_id)
					.map(({ title, episode_id }) => (
						<li className={s.item} key={episode_id}>
							<span className={s.episode}>Episode{episode_id}</span>
							<span className={s.col}>:</span>
							<span className={s.title}>{title}</span>
						</li>
					))}
			</ul>
		</div>
	);
};

PersonFilms.propTypes = {
	personFilms: PropTypes.array,
};

export default PersonFilms;

import PropTypes from 'prop-types';
import s from './PersonPhoto.module.css';


const PersonPhoto = ({ personName, id }) => {


	return (
		<div className={s.img}>
			<img src={`/img/characters/${id}.jpg`} alt={personName} />
		</div>
	);
};

PersonPhoto.propTypes = {
	personName: PropTypes.string,
	id: PropTypes.string,
};

export default PersonPhoto;

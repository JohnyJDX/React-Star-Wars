import PropTypes from 'prop-types';
import s from './UIInput.module.css';

const UIInput = ({ value, placeholder, className, handleInputChange }) => {
	return (
		<input
			className={`${s.input} ${className}`}
			type="text"
			value={value}
			onChange={handleInputChange}
			placeholder={placeholder}
		/>
	);
};

UIInput.propTypes = {
	value: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	handleInputChange: PropTypes.func,
};

export default UIInput;

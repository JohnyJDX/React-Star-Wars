import PropTypes from 'prop-types';
import s from './UIButton.module.css';
import cn from 'classnames';

const UIButton = ({ text, onClick, disabled, theme = 'white', className }) => {
	return (
		<button
			className={cn(s.btn, s[theme], className)}
			disabled={disabled}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

UIButton.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	theme: PropTypes.string,
	className: PropTypes.string,
};

export default UIButton;

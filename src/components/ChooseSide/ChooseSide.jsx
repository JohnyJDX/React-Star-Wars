import PropTypes from 'prop-types';
import s from './ChooseSide.module.css';
import cn from 'classnames';

const ChooseSide = ({ img, title, onClick, className }) => {
	return (
		<div
			onClick={onClick}
			className={cn(s.item, className === 'dark' ? s.dark : s.light)}
		>
			<h4 className={s.title}>{title}</h4>
			<img className={s.img} src={img} alt={img} />
		</div>
	);
};

ChooseSide.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	img: PropTypes.string,
	onClick: PropTypes.func,
};

export default ChooseSide;

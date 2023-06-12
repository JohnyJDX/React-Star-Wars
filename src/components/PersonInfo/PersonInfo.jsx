import PropTypes from 'prop-types';
import s from './PersonInfo.module.css';

const PersonInfo = ({ personInfo }) => {
	return (
			<div className={s.wrapper}>
				<ul className={s.list}>
					{personInfo.map(({ title, data }) => (
						<li className={s.item} key={title}>
							<span className={s.title}>{title}</span>: {data}
						</li>
					))}
				</ul>
			</div>
	);
};

PersonInfo.propTypes = {
	personInfo: PropTypes.array,
};

export default PersonInfo;

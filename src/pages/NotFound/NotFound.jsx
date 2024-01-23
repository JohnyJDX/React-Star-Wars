import { useLocation } from 'react-router-dom';
import img404 from '../../assets/404.png';
import s from './NotFound.module.css';

const NotFound = () => {
	let location = useLocation();

	return (
		<div className={s.wrapper}>
			<div className={s.main}>
				<div className={s.text}>4</div>
				<img className={s.img} src={img404} alt="" />
				<div className={s.text}>4</div>
			</div>
			<p className={s.descr} data-glitch="glitch">
				No match {location.pathname}
			</p>
		</div>
	);
};

export default NotFound;

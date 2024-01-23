import s from './ErrorMessage.module.css';
import video from '../../assets/video/han-solo.mp4';

const ErrorMessage = () => {
	return (
		<div className={s.wrapper}>
			<p className={s.errorText}>
				The dark side of the force has won. <br />
				We cannot display data. <br />
				Come back when we fix everything
			</p>
			<video loop autoPlay muted className={s.video}>
				<source src={video} />
			</video>
		</div>
	);
};

export default ErrorMessage;

import s from './UILoad.module.css';

const UiLoading = () => {
	return (
		<div className={s.spinner}>
			<div className={s.loader}></div>
		</div>
	);
};

export default UiLoading;

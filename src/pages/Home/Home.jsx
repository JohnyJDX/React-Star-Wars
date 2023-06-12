import ChooseSide from '../../components/ChooseSide/ChooseSide';
import darkSide from '../../assets/dark-side.jpg';
import lightSide from '../../assets/light-side.jpg';
import { useTheme } from '../../context/ThemeProvider';
import s from './Home.module.css';

const Home = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<>
			<div className='title centerText'>Choose you side</div>
			<div className={s.wrapper}>
				<ChooseSide
					theme={theme}
					onClick={() => toggleTheme('dark')}
					title={'Dark Side'}
					img={darkSide}
					className="dark"
				/>
				<ChooseSide
					onClick={() => toggleTheme('light')}
					title={'Light Side'}
					img={lightSide}
					className="light"
				/>
			</div>
		</>
	);
};

export default Home;

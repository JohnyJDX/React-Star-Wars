import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import s from './AppLayout.module.css';

const AppLayout = () => {
	return (
		<div className={s.container}>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default AppLayout;

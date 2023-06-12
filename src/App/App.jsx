import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import People from '../pages/People/People';
import Person from '../pages/Person/Person';
import Search from '../pages/Search/Search';
import s from './App.module.css';

const App = () => {
	return (
		<div className={s.wrapper}>
			<Header />
			<main>
				<Routes>
					<Route path="React-Star-Wars/" element={<Home />} />
					<Route path="React-Star-Wars/people" element={<People />} />
					<Route path="React-Star-Wars/search" element={<Search />} />
					<Route path="React-Star-Wars/people/:id" element={<Person />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;

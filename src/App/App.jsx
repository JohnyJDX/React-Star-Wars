import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import People from "../pages/People/People";
import Person from "../pages/Person/Person";
import Search from "../pages/Search/Search";

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: 'people', element: <People /> },
			{ path: 'search', element: <Search /> },
			{ path: 'people/:id', element: <Person /> },
			{ path: '*', element: <NotFound /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App.jsx';
import ThemeProvider from './context/ThemeProvider.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<ThemeProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>
	// </React.StrictMode>
);

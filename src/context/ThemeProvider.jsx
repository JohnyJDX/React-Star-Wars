import { createContext, useContext, useState } from 'react';
import { changeCssVariables } from '../services/changeCssVariables';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState();

	const toggleTheme = name => {
		setTheme(name);
		changeCssVariables(name);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);

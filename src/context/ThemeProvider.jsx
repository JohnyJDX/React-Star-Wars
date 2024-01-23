import { createContext, useContext, useState } from 'react';
import { changeCssVariables } from '../services/changeCssVariables';

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
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

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;

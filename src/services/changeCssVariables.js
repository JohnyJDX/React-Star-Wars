export const changeCssVariables = theme => {
	const root = document.querySelector(':root');

	if (theme === 'dark') {
		root.style.setProperty('--theme-default', 'var(--theme-dark)');
		root.style.setProperty('--theme-default-bg', 'var(--theme-dark-bg)');
	}

	if (theme === 'light') {
		root.style.setProperty('--theme-default', 'var(--theme-light)');
		root.style.setProperty('--theme-default-bg', 'var(--theme-light-bg)');
	}
};

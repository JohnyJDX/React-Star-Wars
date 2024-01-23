import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import EmpireLogo from '../../assets/Logo/Empire Logo.svg';
import JediOrderLogo from '../../assets/Logo/Jedi Order.svg';
import Logo from '../../assets/Logo/Logo.svg';
import { useTheme } from '../../context/ThemeProvider';
import s from './Header.module.css';

const Header = () => {
	const [logo, setLogo] = useState(Logo);
	const [openMenu, setOpenMenu] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		switch (theme) {
			case 'light':
				setLogo(JediOrderLogo);
				break;
			case 'dark':
				setLogo(EmpireLogo);
				break;
			default:
				setLogo(Logo);
		}
	}, [theme]);

	const handleToggleMenu = () => {
		setOpenMenu(prevState => {
			const newOpenMenu = !prevState;
			document.querySelector('body').style.overflow = newOpenMenu
				? 'hidden'
				: 'visible';
			return newOpenMenu;
		});
	};

	const handleNavLinkClick = () => {
		document.querySelector('body').style.overflow = 'visible';
		setOpenMenu(false);
	};

	return (
		<header className={s.header}>
			<Link to="/">
				<img className={s.logo} src={logo} alt="" />
			</Link>
			<nav className={cn(s.navbar, openMenu && s.menu)}>
				<ul className={s.links}>
					<li className={s.link}>
						<NavLink to="/" onClick={handleNavLinkClick}>
							Home
						</NavLink>
					</li>
					<li className={s.link}>
						<NavLink to="/people?page=1" onClick={handleNavLinkClick}>
							Characters
						</NavLink>
					</li>
					<li className={s.link}>
						<NavLink to="/search" onClick={handleNavLinkClick}>
							Search
						</NavLink>
					</li>
				</ul>
			</nav>
			<div
				onClick={handleToggleMenu}
				className={cn(s.hamburger, openMenu && s.open)}
			>
				<div></div>
			</div>
		</header>
	);
};

export default Header;

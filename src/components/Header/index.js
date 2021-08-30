import React from 'react';
import './Header.css';

const Header = () => {
	const logo = 'https://i.pinimg.com/originals/f5/46/10/f5461004115fc4bc9fe27db66d2a33cc.png';
	return (
		<header className="header">
			<h1 className="header__title">POYO's TODO</h1>
			<img className="header__logo" src={logo} alt="Kirby Face" width="50" />
		</header>
	)
}

export { Header };
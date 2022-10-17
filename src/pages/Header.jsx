import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBarLayout from '../components/layouts/NavbarUser-Layout/NabarLayout';
import Cart from './auth/Cart/Cart';
import Login from './auth/Login/Login';
import Profile from './auth/Profile/Profile';
import Register from './auth/Register/Register';
import HomePage from './HomePage/HomePage';

import Hiem from './products/Hiem/Hiem';

import CucHiem from './products/CucHiem/CucHiem';

export default function Header(props) {
    const location = useLocation();

	const renderContent = () => {
		switch (location.pathname) {
		case "/":
			return <HomePage/>;
		case "/login":
			return <Login/>;
		case "/cart":
			return <Cart/>;
		case "/profile":
			return <Profile/>;
        case "/cuc-hiem":
			return <CucHiem/>;
        case "/hiem":
			return <Hiem/>;
        case "/register":
            return <Register/>;
		default:
			return <HomePage/>;
		}
	};

	return <NavBarLayout>{renderContent()}</NavBarLayout>
}
import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoryLayout from '../../components/layouts/Category-Layout/CategoryLayout';
import Hiem from './Hiem/Hiem';
import CucHiem from './CucHiem/CucHiem';

export default function CategoryProduct(props) {
    const location = useLocation();

	const renderContent = () => {
		switch (location.pathname) {
		case "/products/hanghiem":
			return <Hiem/>;
		case "/products/hangcuchiem":
			return <CucHiem/>;
		default:
			return <Hiem/>;
		}
	};

	return <CategoryLayout>{renderContent()}</CategoryLayout>
}
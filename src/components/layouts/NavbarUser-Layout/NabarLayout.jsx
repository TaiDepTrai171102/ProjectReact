import React from 'react';
import PropTypes from "prop-types";
import NavBar from './components/NavBar/NavBar';
import FooterCbn from '../../../pages/HomePage/Footer/Footer';

NavBarLayout.propTypes = {
    children: PropTypes.element,
  };

export default function NavBarLayout(props) {
    const { children } = props;
    return (
        <div className='body'>
            <NavBar/>
            {children}
            <FooterCbn/>
        </div>
    )
}
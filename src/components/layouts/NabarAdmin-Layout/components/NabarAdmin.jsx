import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBarAdmin() {
    return(
        <div className='navbar-admin'>           
           
            <div className="navbar-a btn">
                <NavLink to='/admin/products'>Products</NavLink>
                <NavLink to='/admin/purchase'>Purchase</NavLink>
                <NavLink to='/admin/turnover'>Turnover</NavLink>
            </div>
        </div>
    )
}
export default NavBarAdmin;
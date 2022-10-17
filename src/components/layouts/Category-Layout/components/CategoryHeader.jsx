import React from 'react';
import { NavLink } from "react-router-dom";
import {ShopOutlined} from '@ant-design/icons';

export default function CategoryHeader() {
    return (
        <>
            <div className='category__header'>
                <h1 className='title__category'><ShopOutlined /> Sản phẩm</h1>
                <div className="category__item">
                    <NavLink to={'/products/hanghiem'}>
                        <p>Hàng hiếm</p>
                    </NavLink>
                    <NavLink to={'/products/hangcuchiem'}>
                        <p>Hàng cực hiếm</p>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Edit from '../pages/Admin/AdminPages/Edit/Edit';
import Products from '../pages/Admin/AdminPages/Products/Products';
import Purchase from '../pages/Admin/AdminPages/Purchase/Purchase';
import Turnover from '../pages/Admin/AdminPages/Turnover/Turnover';
import Success from '../pages/auth/Cart/CheckoutSuccess/Success';
import OrderDetail from '../pages/auth/PurchaseHistory/OrderDetail/OrderDetail';
import PurchaseHistory from '../pages/auth/PurchaseHistory/PurchaseHistory';
import DetailProduct from '../pages/DetailProduct/DetailProduct';
import Header from '../pages/Header';
import CategoryProduct from '../pages/products/CategoryProduct';
import AddUser from '../pages/Admin/AdminPages/Turnover/TurnoverPage/components/AddUser';
import CodeForInterview from '../pages/Admin/AdminPages/Turnover/TurnoverPage/components/CodeForInterView';	
import EditUser from '../pages/Admin/AdminPages/Turnover/TurnoverPage/components/EditUser';
import NotFound from '../pages/Admin/AdminPages/Turnover/TurnoverPage/components/NotFound';


export function OnepieceApp() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Header/>}></Route>
					<Route path='/product-detail/:id' element={<DetailProduct/>}></Route>
					<Route path='/Login' element={<Header/>}></Route>
					<Route path='/cart' element={<Header/>}></Route>
					<Route path='/profile' element={<Header/>}></Route>
					<Route path='/products/hanghiem' element={<CategoryProduct/>}></Route>
					<Route path='/products/hangcuchiem' element={<CategoryProduct/>}></Route>
					<Route path='/register' element={<Header/>}></Route>
					<Route path='/cart/success/:id' element={<Success/>}></Route>
					<Route path='/order-list/detail:id' element={<OrderDetail></OrderDetail>}></Route>
					<Route path='/order-list/delivering' element={<PurchaseHistory/>}/>
					<Route path='/order-list/received' element={<PurchaseHistory/>}/>
					<Route path='/order-list/cancelled' element={<PurchaseHistory/>}/>
					<Route path='/order-list/confirm' element={<PurchaseHistory/>}/>
					<Route path='/dashboard' element={<Navigate to='/admin/products'/>}></Route>
					<Route path="/admin/products" element ={<Navigate to="/admin/products/all"/>}/>
					<Route path="/admin/products/all" element = {<Products/>}></Route>
					<Route path="/admin/products/hiem" element = {<Products/>}></Route>
                    <Route path="/admin/products/other" element = {<Products/>}></Route>
                    <Route path="/admin/products/add-product" element = {<Products/>}></Route>
					<Route path="/admin/purchase" element = {<Navigate to="/admin/purchase/confirm"/>}></Route>
                    <Route path="/admin/purchase/confirm" element = {<Purchase/>}></Route>                    
                    <Route path="/admin/purchase/delivering" element = {<Purchase/>}></Route>
                    <Route path="/admin/purchase/delivered" element = {<Purchase/>}></Route>
                    <Route path="/admin/purchase/cancel" element = {<Purchase/>}></Route>
                    <Route path="/admin/turnover" element = {<Turnover/>}></Route>
                    <Route path="/add" element = {<AddUser/>}></Route>
                    <Route path="/admin/edit/:id" element = {<Edit/>}/>
					<Route path="/" element={<CodeForInterview />} />  
                    <Route path="/edit/:id" element={<EditUser />} />
                    <Route element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
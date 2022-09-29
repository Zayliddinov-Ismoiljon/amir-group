import React, { useState } from 'react';
import Logo from '../../Assets/images/logo.png';
import { Col, Row, Select } from 'antd';
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';

import './HeaderTop.css';
import Login from '../Login/Login';
import {
	Link,
	Router,
	Switch,
	Route,
	Routes,
	BrowserRouter,
} from 'react-router-dom';
import Home from '../Home/Home';
const children = ['Toshkent', 'Namangan', 'Samarqand'];

export default function HeaderTop(props) {

	return (
		<>
			<div className='header-bottom'>
				<nav className='navbar navbar-light justify-content-between '>
					<div className='container'>
						<a className='navbar-brand'>
							<img
								style={{ width: '100px', height: '50px' }}
								src={Logo}
								alt='logo'
								className='logo'
							/>
						</a>
						<Link to='/home' className="nav__link">Home</Link>
						<Link to='/about' className="nav__link">About</Link>
						<Link to='/contact' className="nav__link">Contact</Link>
						<Link to="/login" className="nav__link">Login</Link>

						<form className='form-inline'>
							<input
								className='form-control mr-sm-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							<button
								className='btn btn-outline-success my-2 my-sm-0'
								type='submit'>
								Search
							</button>
						</form>
					</div>
				</nav>
			</div>
		</>
	);
}

import { Breadcrumb, Button, Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import SearchIcon from '../../Assets/images/Search.png';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
const { Search } = Input;

export default function Main() {
	const [product, setProduct] = useState([]);

	const perPage = 5;
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`https://fakestoreapi.com/products`, options)
			.then((response) => response.json())
			.then((data) => {
				setProduct(data);
				console.log('data', data);
			});
	}, []);

	const [searchInput, setSearchInput] = useState('');
	const [filteredResults, setFilteredResults] = useState([]);

	const searchItems = (searchValue) => {
		setSearchInput(searchValue);

		if (searchInput !== '') {
			const filterData = product.filter((item) => {
				return Object.values(item)
					.join('')
					.toLowerCase()
					.includes(searchInput.toLowerCase());
			});

			setFilteredResults(filterData);
		} else {
			setFilteredResults(product);
		}
	};

	return (
		<div
			className='d-flex justify-content-start'
			style={{ paddingTop: '20px', paddingLeft: '280px' }}>
			<div
				className=''
				style={{
					backgroundColor: '#F3F5F8',
					width: '100%',
					borderRadius: '10px',
					padding: '20px',
				}}>
				<Breadcrumb>
					<Breadcrumb.Item>главное</Breadcrumb.Item>
					<Breadcrumb.Item>
						<a href='' style={{ color: 'green' }}>
							Оформить Заказ
						</a>
					</Breadcrumb.Item>
				</Breadcrumb>
				<h2
					style={{ marginTop: '30px', marginBottom: '20px', color: '#3D639D' }}>
					Оформить Заказ
				</h2>
				<form class='d-flex' role='search'>
					<input
						class='form-control me-2'
						type='search'
						placeholder='Search'
						aria-label='Search'
						onChange={(e) => {
							searchItems(e.target.value);
						}}
					/>
					<button class='btn btn-outline-success bg-success' type='submit'>
						<img
							width={'100%'}
							height={'30px'}
							src={SearchIcon}
							alt='search icon'
						/>
					</button>
				</form>
				<h4 style={{ marginTop: '30px', marginBottom: '20px' }}>
					Все товары (20)
				</h4>
				<Row gutter={[12, 12]}>
					{searchInput.length > 1 ? (
						filteredResults.map(
							(item, i) =>
								(currentPage - 1) * perPage <= i &&
								currentPage * perPage > i && (
									<Col span={6}>
										<Link key={i} to={`/product/${item.id}`}>
											<Card
												style={{ textAlign: 'center', borderRadius: '10px' }}>
												<img
													width={'100%'}
													height={'300px'}
													src={item.image}
													alt='image'
												/>
												<h6
													style={{
														marginTop: '10px',
														marginBottom: '10px',
													}}>
													{item.title}
												</h6>
												<span style={{ fontWeight: '600' }}>
													{item.price} so'm
												</span>
												<button className='btn btn-danger text-light d-block w-75 my-3 me-auto ms-auto fs-6'>
													{item.rating?.count}
												</button>
											</Card>
										</Link>
									</Col>
								),
						)
					) : (
						<>
							{
								product.map(
									(item, i) =>
										(currentPage - 1) * perPage <= i &&
										currentPage * perPage > i && (
											<Col span={6}>
												<Link key={i} to={`/product/${item.id}`}>
													<Card
														style={{ textAlign: 'center', borderRadius: '10px' }}>
														<img
															width={'100%'}
															height={'300px'}
															src={item.image}
															alt='image'
														/>
														<h6
															style={{
																marginTop: '10px',
																marginBottom: '10px',
															}}>
															{item.title}
														</h6>
														<span style={{ fontWeight: '600' }}>
															{item.price} so'm
														</span>
														<button className='btn btn-danger text-light d-block w-75 my-3 me-auto ms-auto fs-6'>
															{item.rating?.count}
														</button>
													</Card>
												</Link>
											</Col>
										),
								)
							}
							<Col span={24}>
							<div
									style={{
										display: 'flex',
										alignItems: 'center',
										width: '15%',
										justifyContent: 'space-between',
										marginRight: 'auto',
										marginLeft: 'auto',
									}}>
									{[...Array(Math.ceil(product.length / perPage))].map(
										(e, i) => (
											<Button
												style={{
													borderRadius: '50%',
													border: '1px solid green',
												}}
												onClick={() => {
													setCurrentPage(i + 1);
												}}>
												{i + 1}
											</Button>
										),
									)}
								</div>
							</Col>
						</>
					)}
				</Row>
			</div>
		</div>
	);
}

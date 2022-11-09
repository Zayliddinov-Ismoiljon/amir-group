import { Breadcrumb, Checkbox, Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Collapse } from 'antd';
import aksiya from '../../Assets/images/aksi-refresh.png';
import bundle from '../../Assets/images/aksiya-bundle.png';
import prasent from '../../Assets/images/prasent.png';
import imecodgreen from '../../Assets/images/imecodgreen.png'

const { Panel } = Collapse;

const contentStyle = {
	height: '160px',
	color: '#000',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#F3F5F8',
};

export default function Product() {
	const [dotPosition, setDotPosition] = useState('top');
	const handlePositionChange = ({ target: { value } }) => {
		setDotPosition(value);
	};

	const [productId, setProductId] = useState([]);
	const url = useLocation((auth) => auth).pathname;
	const id = url.split('/')[url.split('/').length - 1];

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`https://fakestoreapi.com/products/${id}`, options)
			.then((response) => response.json())
			.then((data) => {
				setProductId(data);
			});
	}, []);

	const onChange = (key) => {
		console.log(key);
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
					<Breadcrumb.Item>Главное/Оформить Заказ</Breadcrumb.Item>
					<Breadcrumb.Item>
						<a href='' style={{ color: 'green' }}>
							Продукт
						</a>
					</Breadcrumb.Item>
				</Breadcrumb>
				<div
					style={{
						padding: '20px',
						borderRadius: '10px',
						backgroundColor: 'white',
						marginTop: '30px',
					}}>
					<h3 style={{ color: 'blue', marginBottom: '60px' }}>
						{productId.title}
					</h3>
					<Row gutter={[12, 12]}>
						<Col span={8}>
							<img
								style={{ width: '100%' }}
								src={productId.image}
								alt='image'
							/>
						</Col>
						<Col span={16}>
							<div style={{ paddingLeft: '170px' }}>
								<h4 style={{ color: 'silver' }}>Цена</h4>
								<h3>{productId.price} so'm</h3>
								<span
									style={{
										display: 'block',
										width: '100%',
										height: '1px',
										backgroundColor: 'silver',
										marginTop: '20px',
										marginBottom: '20px',
									}}></span>
								<h4 style={{ color: 'silver' }}>Обшая Цена</h4>
								<div
									style={{ display: 'flex', justifyContent: 'space-between' }}>
									<h4>{productId.rating?.count} so'm</h4>
									<div>
										<button className='btn btn-danger text-light mr-3'>
											{productId.rating?.rate} so'm
										</button>
										<span style={{ color: 'silver' }}>x3</span>
									</div>
								</div>
								<div
									class='btn-group mt-5 w-100'
									role='group'
									aria-label='Basic radio toggle button group'>
									<input
										type='radio'
										class='btn-check'
										name='btnradio'
										id='btnradio1'
										autocomplete='off'
										checked
									/>
									<label class='btn btn-outline-success' for='btnradio1'>
										3 мес
									</label>

									<input
										type='radio'
										class='btn-check'
										name='btnradio'
										id='btnradio2'
										autocomplete='off'
									/>
									<label class='btn btn-outline-success' for='btnradio2'>
										6 мес
									</label>

									<input
										type='radio'
										class='btn-check'
										name='btnradio'
										id='btnradio3'
										autocomplete='off'
									/>
									<label class='btn btn-outline-success' for='btnradio3'>
										12 мес
									</label>

									<input
										type='radio'
										class='btn-check'
										name='btnradio'
										id='btnradio4'
										autocomplete='off'
									/>
									<label class='btn btn-outline-success' for='btnradio4'>
										24 мес
									</label>
								</div>
								<h3 style={{ textAlign: 'center', marginTop: '0' }}>
									На Цена : 5%
								</h3>
								<span
									style={{
										display: 'block',
										width: '100%',
										height: '1px',
										backgroundColor: 'silver',
										marginTop: '20px',
										marginBottom: '20px',
									}}></span>
								<h3 style={{ color: 'silver' }}>Общие характеристика</h3>
								<h5>Category: {productId.category}</h5>
								<h5>Count: {productId.rating?.count}</h5>
								<h5>Rate: {productId.rating?.rate}</h5>
								<Collapse onChange={onChange}>
									<Panel
										header='Показать все'
										style={{ backgroundColor: 'white' }}
										key='1'>
										<h5>{productId.description}</h5>
									</Panel>
								</Collapse>
							</div>
						</Col>
					</Row>
					<h5
						style={{ color: 'green', marginTop: '60px', marginBottom: '30px' }}>
						Акции
					</h5>
					<Row gutter={[12, 12]}>
						<Col span={24}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									width: '100%',
								}}>
								<div
									style={{
										// width: '32%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}>
									<img src={aksiya} style={{marginRight:'50px'}} alt='image' />
									<div>
										<h6 style={{ margin: '0', padding: '0' }}>
											Обменяй свой старый айфон и получи скидку на новый
										</h6>
										<br />
										<span
											style={{ margin: '0', padding: '0', color: 'silver' }}>
											-400 000 сум
										</span>
									</div>
								</div>

								<div class='form-check form-check-inline'>
									<input
										class='form-check-input'
										type='checkbox'
										id='inlineCheckbox2'
										value='option2'
									/>
								</div>
							</div>
							<span
								style={{
									display: 'block',
									width: '100%',
									height: '1px',
									backgroundColor: 'silver',
									marginTop: '20px',
									marginBottom: '20px',
								}}></span>
						</Col>
						<Col span={24}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									width: '100%',
								}}>
								<div
									style={{
										// width: '15%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}>
									<img src={bundle} style={{marginRight:'50px'}} alt='image' />
									<div>
										<h6 style={{ margin: '0', padding: '0' }}>
											Наушники в подарок
										</h6>
										<br />
										<span
											style={{ margin: '0', padding: '0', color: 'silver' }}>
											Apple EarPods
										</span>
									</div>
								</div>

								<div class='form-check form-check-inline'>
									<input
										class='form-check-input'
										type='checkbox'
										checked
										id='inlineCheckbox2'
										value='option2'
									/>
								</div>
							</div>
							<span
								style={{
									display: 'block',
									width: '100%',
									height: '1px',
									backgroundColor: 'silver',
									marginTop: '20px',
									marginBottom: '20px',
								}}></span>
						</Col>
						<Col span={24}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									width: '100%',
								}}>
								<div
									style={{
										// width: '17%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}>
									<img src={prasent} style={{marginRight:'50px'}} alt='image' />
									<div>
										<h6 style={{ margin: '0', padding: '0' }}>
											Скидка 20% на телефона
										</h6>
										<br />
										<span
											style={{ margin: '0', padding: '0', color: 'silver' }}>
											-10 000 сум
										</span>
									</div>
								</div>

								<div class='form-check form-check-inline'>
									<input
										class='form-check-input'
										type='checkbox'
										checked
										id='inlineCheckbox2'
										value='option2'
									/>
								</div>
							</div>
							<span
								style={{
									display: 'block',
									width: '100%',
									height: '1px',
									backgroundColor: 'silver',
									marginTop: '20px',
									marginBottom: '20px',
								}}></span>
						</Col>
						<Col span={24}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									width: '100%',
								}}>
								<div
									style={{
										// width: '14%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}>
									<img src={imecodgreen} style={{marginRight:'50px'}} alt='image' />
									<div>
										<h6 style={{ margin: '0', padding: '0' }}>
											Скидка на айфоны
										</h6>
										<br />
										<span
											style={{ margin: '0', padding: '0', color: 'silver' }}>
											-10 000 сум
										</span>
									</div>
								</div>

								<div class='form-check form-check-inline'>
									<input
										class='form-check-input'
										type='checkbox'
										checked
										id='inlineCheckbox2'
										value='option2'
									/>
								</div>
							</div>
							<span
								style={{
									display: 'block',
									width: '100%',
									height: '1px',
									backgroundColor: 'silver',
									marginTop: '20px',
									marginBottom: '20px',
								}}></span>
						</Col>
						<Col span={24}>
							<button type='button' style={{width:'100%', borderRadius:'12px', padding:'10px', backgroundColor:'#00C48C', color:'white', border:'none'}}>Добавит в корзину</button>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
}

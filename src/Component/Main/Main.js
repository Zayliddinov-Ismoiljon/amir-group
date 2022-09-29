import React, { useState } from 'react';
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Col, Layout, Menu, Row } from 'antd';
import { Card, List } from 'antd';
import { Select } from 'antd';
import './Main.css';
import { Link } from 'react-router-dom';
import SwipeableTextMobileStepper from './Carusel/Carusel';
const { Option } = Select;

const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
	key,
	label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
	(icon, index) => {
		const key = String(index + 1);
		return {
			key: `sub${key}`,
			icon: React.createElement(icon),
			label: `subnav ${key}`,
			children: new Array(4).fill(null).map((_, j) => {
				const subKey = index * 4 + j + 1;
				return {
					key: subKey,
					label: `option${subKey}`,
				};
			}),
		};
	},
);

const data = [
	{
		cityName: 'Toshkent',
		title: 'Proweb',
		image: 'https://proweb.uz/img/01.bdb4e6ce.webp',
		direction: ['Frond end', 'Backend', 'Android', '3D max', 'flutter'],
	},
	{
		cityName: 'Namangan',
		title: 'IT School',
		image:
			'https://it-park.uz/storage/images/news/normal/LJbV2Co2zwZJbv9WHoebwP6MDSbztXEXaiXa0IeC.jpeg',
		direction: ['Copywriter', 'Backend', 'Adobe', '3D max', 'SMM', 'C++'],
	},
	{
		cityName: 'Samarqand',
		title: 'IT Park Samarqand',
		image:
			'https://it-park.uz/storage/images/newsimage/photo_2022-08-24_18-56-21_1661426956.jpg',
		direction: [
			'Figma',
			'flutter',
			'Cyber security',
			'3D max',
			'SMM',
			'1C',
			'Backend',
		],
	},
];

const defaulData = {
	cityName: '',
	title: "Najot Ta'lim",
	image:
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWD-jGxBj_4f_42BKCSrx5wG2bsN9RNLsew&usqp=CAU',
	direction: [
		'Frond end',
		'Backend',
		'Android',
		'3D max',
		'flutter',
		'SMM',
		'Copywriter',
	],
};

export default function Main() {
	const [optionValue, setOptionValue] = useState();

	const onChange = (value) => {
		setOptionValue(value);
	};

	return (
		<div className='container'>
			<Row
				gutter={24}
				style={{
					paddingTop: '10px',
					paddingBottom: '10px',
					boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
				}}>
				<Col span={18}>Header inner</Col>
				<Col span={6}>
					<Select
						style={{ width: '100%' }}
						showSearch
						placeholder='Select a person'
						optionFilterProp='children'
						onChange={onChange}>
						{data.map((item, i) => (
							<Option key={i} value={item.cityName}>
								{item.cityName}
							</Option>
						))}
					</Select>
				</Col>
			</Row>
			<div style={{ paddingTop: '50px' }}>
				{optionValue ? (
					data.map(
						(item, i) =>
							optionValue === item.cityName && (
								<>
									<Row gutter={24}>
										<Col span={8}>
											<img
												src={item.image}
												style={{ width: '100%', height: '200px' }}
												alt='image'
											/>
										</Col>
										<Col span={10}>
											<h3>{item.title}</h3>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Nobis saepe dolorum impedit quisquam molestiae accusantium
											fugit mollitia voluptatem magni nulla?Lorem ipsum dolor
											sit amet, consectetur adipisicing elit. Nam velit debitis
											tenetur, rerum architecto repellat eum laudantium
											cupiditate harum accusantium! Lorem ipsum, dolor sit amet
											consectetur adipisicing elit. Soluta, magnam aperiam quas
											rem laudantium dolorem blanditiis iusto repellat possimus
											deserunt.
											<Link to='/course'>
												<button className='button'>
													<a href='https://kun.uz' target='blank' className='link'>
														<span className='mask'>
															<div className='link-container'>
																<span className='link-title1 title'>Batafsil</span>
																<span className='link-title2 title'>Batafsil</span>
															</div>
														</span>
														<div className='link-icon'>
															<svg
																className='icon'
																width='24'
																height='24'
																xmlns='http://www.w3.org/2000/svg'
																fillRule='evenodd'
																clipRule='evenodd'>
																<path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
															</svg>
															<svg
																className='icon'
																width='24'
																height='24'
																xmlns='http://www.w3.org/2000/svg'
																fillRule='evenodd'
																clipRule='evenodd'>
																<path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
															</svg>
														</div>
													</a>
												</button>
											</Link>
										</Col>
										<Col span={6}>
											<List>
												{item.direction.map((item, i) => (
													<List.Item>{item}</List.Item>
												))}
											</List>
										</Col>
									</Row>
								</>
							),
					)
				) : (
					<>
						<Row gutter={24}>
							<Col span={8}>
								<img
									src={defaulData.image}
									style={{ width: '100%', height: '200px' }}
									alt='image'
								/>
							</Col>
							<Col span={10}>
								<h3>{defaulData.title}</h3>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Deserunt animi distinctio saepe iste nulla possimus ipsa
								architecto suscipit nisi eligendi. Lorem ipsum, dolor sit amet
								consectetur adipisicing elit. Sunt magnam nesciunt perspiciatis
								atque velit molestias labore, architecto deserunt aliquam.
								Nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Minus, tempore non harum accusamus quo illum at delectus
								eaque facilis modi officia ex aliquid iste? Dignissimos rem
								officiis similique corporis nihil.
								<Link to='/course'>
								<button className='button'>
													<a href='https://kun.uz' target='blank' className='link'>
														<span className='mask'>
															<div className='link-container'>
																<span className='link-title1 title'>Batafsil</span>
																<span className='link-title2 title'>Batafsil</span>
															</div>
														</span>
														<div className='link-icon'>
															<svg
																className='icon'
																width='24'
																height='24'
																xmlns='http://www.w3.org/2000/svg'
																fillRule='evenodd'
																clipRule='evenodd'>
																<path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
															</svg>
															<svg
																className='icon'
																width='24'
																height='24'
																xmlns='http://www.w3.org/2000/svg'
																fillRule='evenodd'
																clipRule='evenodd'>
																<path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
															</svg>
														</div>
													</a>
												</button>
								</Link>
							</Col>
							<Col span={6}>
								<List>
									{defaulData.direction.map((item, i) => (
										<List.Item key={i}>{item}</List.Item>
									))}
								</List>
							</Col>
						</Row>
					</>
				)}
				<SwipeableTextMobileStepper />
			</div>
		</div>
	);
}

{
}

{
	/* <Link to="/course">more info</Link> */
}

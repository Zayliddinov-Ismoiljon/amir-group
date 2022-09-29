import React, { useState } from 'react';
import { Card, Col, Row, Tabs, Carousel, List } from 'antd';
import './CourseMain.css';
import { Link } from 'react-router-dom';
import { Radio, Select } from 'antd';
const { Option } = Select;
const { Meta } = Card;

const courseData = [
	{
		courseName: 'web',
		date: '28 sentabr chorshanba',
		time: '17:00',
		type: 'online',
	},
	{
		courseName: 'max',
		date: '15 oktabr shanba',
		time: '17:00',
		type: 'oflayn',
	},
	{
		courseName: 'android',
		date: '8 oktabr shanba',
		time: '17:00',
		type: 'oflayn',
	},
	{
		courseName: 'flutter',
		date: '11 oktabr seshanba',
		time: '17:00',
		type: 'online',
	},
];

export default function CourseMain() {
	const contentStyle = {
		width: '100%',
		height: '400px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
	};

	const [courseName, setCourseName] = useState();

	const handleChange = (value) => {
		setCourseName(value);
	};

	const handleDate = () => {
		console.log('dateValue:');
	};

	return (
		<>
			<div className='enroll-course'>
				<div className='container'>
					<div
						className=''
						style={{
							width: '603px',
							marginRight: 'auto',
							marginLeft: 'auto',
							textAlign: 'center',
							color: 'white',
						}}>
						<h3 style={{ color: 'white', fontSize: '120px', margin: '0' }}>
							PROWEB
						</h3>
						<span
							style={{ color: 'white', fontSize: '36px', display: 'block' }}>
							zamonaviy kurslar kasblari
						</span>
						<a
							href='#'
							style={{
								color: 'white',
								fontSize: '36px',
								display: 'block',
								backgroundColor: 'transparent',
								width: '100%',
								padding: '10px',
								border: '1px solid white',
							}}>
							Kursga yozilish
						</a>
					</div>
				</div>
			</div>
			<ul className='enroll-course__list'>
				<li className='enroll-course__item'>
					<h3>Web dastrulash</h3>
					<div className='info'>
						<p>
							Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
							consectetur adipisicing elit.
						</p>
					</div>
				</li>
				<li className='enroll-course__item'>
					<h3>Web dastrulash</h3>
					<div className='info'>
						<p>
							Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
							consectetur adipisicing elit.
						</p>
					</div>
				</li>
				<li className='enroll-course__item'>
					<h3>Web dastrulash</h3>
					<div className='info'>
						<p>
							Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
							consectetur adipisicing elit.
						</p>
					</div>
				</li>
				<li className='enroll-course__item'>
					<h3>Web dastrulash</h3>
					<div className='info'>
						<p>
							Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
							consectetur adipisicing elit.
						</p>
					</div>
				</li>
				<li className='enroll-course__item'>
					<h3>Web dastrulash</h3>
					<div className='info'>
						<p>
							Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
							consectetur adipisicing elit.
						</p>
					</div>
				</li>
				<li className='enroll-course__item'>
					<h3>Web dastrulash</h3>
					<div className='info'>
						<p>
							Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
							consectetur adipisicing elit.
						</p>
					</div>
				</li>
				<li className='enroll-course__item'>
					<h3>Web dastrulash</h3>
					<div className='info'>
						<p>
							Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
							consectetur adipisicing elit.
						</p>
					</div>
				</li>
				<li className='enroll-course__item'>
					<h3>Web dastrulash</h3>
					<div className='info'>
						<p>
							Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
							consectetur adipisicing elit.
						</p>
					</div>
				</li>
				<li className='enroll-course__item'>
					<h3>Web dastrulash</h3>
					<div className='info'>
						<p>
							Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
							consectetur adipisicing elit.
						</p>
					</div>
				</li>
				<li className='enroll-course__item'>
					<h3>Web dastrulash</h3>
					<div className='info'>
						<p>
							Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
							consectetur adipisicing elit.
						</p>
					</div>
				</li>
				<li className='enroll-course__item'>
					<h3>Web dastrulash</h3>
					<div className='info'>
						<p>
							Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
							consectetur adipisicing elit.
						</p>
					</div>
				</li>
				<li className='enroll-course__item'>
					<h3>Web dastrulash</h3>
					<div className='info'>
						<p>
							Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
							consectetur adipisicing elit.
						</p>
					</div>
				</li>
			</ul>
			<div className='container'>
				<Tabs centered defaultActiveKey='1'>
					<Tabs.TabPane tab='NEGA BIZ ' key='1'>
						<Carousel autoplay>
							<div>
								<Row gutter={24}>
									<Col span={10}>
										<h3>Lorem, ipsum dolor.</h3>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate commodi fugit cum rerum quod sit eius a et maxime
										natus. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Eaque rem accusamus officiis architecto, cumque,
										recusandae dolorem eum facilis sequi eius excepturi expedita
										perferendis asperiores officia ullam culpa. Rerum,
										architecto molestias.
									</Col>
									<Col span={14}>
										<img
											style={contentStyle}
											src='http://gogotraining.com/blog/wp-content/uploads/2016/11/Online-IT-Course.jpg'
											alt='eyfel'
										/>
									</Col>
								</Row>
							</div>
							<div>
								<Row gutter={24}>
									<Col span={10}>
										<h3>Lorem, ipsum dolor.</h3>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate commodi fugit cum rerum quod sit eius a et maxime
										natus. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Eaque rem accusamus officiis architecto, cumque,
										recusandae dolorem eum facilis sequi eius excepturi expedita
										perferendis asperiores officia ullam culpa. Rerum,
										architecto molestias.
									</Col>
									<Col span={14}>
										<img
											style={contentStyle}
											src='https://www.candlefox.com/images/scau/subject/it_499.jpg?crop=1.5:1,smart&width=768'
											alt='eyfel'
										/>
									</Col>
								</Row>
							</div>
							<div>
								<Row gutter={24}>
									<Col span={10}>
										<h3>Lorem, ipsum dolor.</h3>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate commodi fugit cum rerum quod sit eius a et maxime
										natus. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Eaque rem accusamus officiis architecto, cumque,
										recusandae dolorem eum facilis sequi eius excepturi expedita
										perferendis asperiores officia ullam culpa. Rerum,
										architecto molestias.
									</Col>
									<Col span={14}>
										<img
											style={contentStyle}
											src='https://edexec.co.uk/wp-content/uploads/2021/12/iStock-887302492.jpg'
											alt='eyfel'
										/>
									</Col>
								</Row>
							</div>
							<div>
								<Row gutter={24}>
									<Col span={10}>
										<h3>Lorem, ipsum dolor.</h3>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate commodi fugit cum rerum quod sit eius a et maxime
										natus. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Eaque rem accusamus officiis architecto, cumque,
										recusandae dolorem eum facilis sequi eius excepturi expedita
										perferendis asperiores officia ullam culpa. Rerum,
										architecto molestias.
									</Col>
									<Col span={14}>
										<img
											style={contentStyle}
											src='https://i.pinimg.com/originals/66/5e/82/665e821a31da3886c4bb9bc995bc8305.jpg'
											alt='eyfel'
										/>
									</Col>
								</Row>
							</div>
						</Carousel>
					</Tabs.TabPane>
					<Tabs.TabPane tab='FAQAT BIZDA' key='2'>
						<Carousel autoplay>
							<div>
								<Row gutter={24}>
									<Col span={10}>
										<h3>Lorem, ipsum dolor.</h3>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate commodi fugit cum rerum quod sit eius a et maxime
										natus. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Eaque rem accusamus officiis architecto, cumque,
										recusandae dolorem eum facilis sequi eius excepturi expedita
										perferendis asperiores officia ullam culpa. Rerum,
										architecto molestias.
									</Col>
									<Col span={14}>
										<img
											style={contentStyle}
											src='http://gogotraining.com/blog/wp-content/uploads/2016/11/Online-IT-Course.jpg'
											alt='eyfel'
										/>
									</Col>
								</Row>
							</div>
							<div>
								<Row gutter={24}>
									<Col span={10}>
										<h3>Lorem, ipsum dolor.</h3>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate commodi fugit cum rerum quod sit eius a et maxime
										natus. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Eaque rem accusamus officiis architecto, cumque,
										recusandae dolorem eum facilis sequi eius excepturi expedita
										perferendis asperiores officia ullam culpa. Rerum,
										architecto molestias.
									</Col>
									<Col span={14}>
										<img
											style={contentStyle}
											src='https://www.candlefox.com/images/scau/subject/it_499.jpg?crop=1.5:1,smart&width=768'
											alt='eyfel'
										/>
									</Col>
								</Row>
							</div>
							<div>
								<Row gutter={24}>
									<Col span={10}>
										<h3>Lorem, ipsum dolor.</h3>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate commodi fugit cum rerum quod sit eius a et maxime
										natus. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Eaque rem accusamus officiis architecto, cumque,
										recusandae dolorem eum facilis sequi eius excepturi expedita
										perferendis asperiores officia ullam culpa. Rerum,
										architecto molestias.
									</Col>
									<Col span={14}>
										<img
											style={contentStyle}
											src='https://edexec.co.uk/wp-content/uploads/2021/12/iStock-887302492.jpg'
											alt='eyfel'
										/>
									</Col>
								</Row>
							</div>
							<div>
								<Row gutter={24}>
									<Col span={10}>
										<h3>Lorem, ipsum dolor.</h3>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate commodi fugit cum rerum quod sit eius a et maxime
										natus. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Eaque rem accusamus officiis architecto, cumque,
										recusandae dolorem eum facilis sequi eius excepturi expedita
										perferendis asperiores officia ullam culpa. Rerum,
										architecto molestias.
									</Col>
									<Col span={14}>
										<img
											style={contentStyle}
											src='https://i.pinimg.com/originals/66/5e/82/665e821a31da3886c4bb9bc995bc8305.jpg'
											alt='eyfel'
										/>
									</Col>
								</Row>
							</div>
						</Carousel>
					</Tabs.TabPane>
					<Tabs.TabPane tab='BEPUL BONUS' key='3'>
						<Carousel autoplay>
							<div>
								<Row gutter={24}>
									<Col span={10}>
										<h3>Lorem, ipsum dolor.</h3>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate commodi fugit cum rerum quod sit eius a et maxime
										natus. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Eaque rem accusamus officiis architecto, cumque,
										recusandae dolorem eum facilis sequi eius excepturi expedita
										perferendis asperiores officia ullam culpa. Rerum,
										architecto molestias.
									</Col>
									<Col span={14}>
										<img
											style={contentStyle}
											src='http://gogotraining.com/blog/wp-content/uploads/2016/11/Online-IT-Course.jpg'
											alt='eyfel'
										/>
									</Col>
								</Row>
							</div>
							<div>
								<Row gutter={24}>
									<Col span={10}>
										<h3>Lorem, ipsum dolor.</h3>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate commodi fugit cum rerum quod sit eius a et maxime
										natus. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Eaque rem accusamus officiis architecto, cumque,
										recusandae dolorem eum facilis sequi eius excepturi expedita
										perferendis asperiores officia ullam culpa. Rerum,
										architecto molestias.
									</Col>
									<Col span={14}>
										<img
											style={contentStyle}
											src='https://www.candlefox.com/images/scau/subject/it_499.jpg?crop=1.5:1,smart&width=768'
											alt='eyfel'
										/>
									</Col>
								</Row>
							</div>
							<div>
								<Row gutter={24}>
									<Col span={10}>
										<h3>Lorem, ipsum dolor.</h3>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate commodi fugit cum rerum quod sit eius a et maxime
										natus. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Eaque rem accusamus officiis architecto, cumque,
										recusandae dolorem eum facilis sequi eius excepturi expedita
										perferendis asperiores officia ullam culpa. Rerum,
										architecto molestias.
									</Col>
									<Col span={14}>
										<img
											style={contentStyle}
											src='https://edexec.co.uk/wp-content/uploads/2021/12/iStock-887302492.jpg'
											alt='eyfel'
										/>
									</Col>
								</Row>
							</div>
							<div>
								<Row gutter={24}>
									<Col span={10}>
										<h3>Lorem, ipsum dolor.</h3>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate commodi fugit cum rerum quod sit eius a et maxime
										natus. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Eaque rem accusamus officiis architecto, cumque,
										recusandae dolorem eum facilis sequi eius excepturi expedita
										perferendis asperiores officia ullam culpa. Rerum,
										architecto molestias.
									</Col>
									<Col span={14}>
										<img
											style={contentStyle}
											src='https://i.pinimg.com/originals/66/5e/82/665e821a31da3886c4bb9bc995bc8305.jpg'
											alt='eyfel'
										/>
									</Col>
								</Row>
							</div>
						</Carousel>
					</Tabs.TabPane>
				</Tabs>
			</div>
			<div className='kovorking'>
				<div className='container'>
					<Card
						style={{
							width: '60%',
							border: 'none',
							backgroundColor: 'transparent',
							paddingTop: '100px',
						}}>
						<h3 style={{ color: 'white', fontSize: '72px', fontWeight: '600' }}>
							Kovorking
						</h3>
						<p style={{ color: 'white', fontSize: '24px', fontWeight: '600' }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
							reiciendis possimus. Eos dolorum fuga, vel est amet ea!
							Architecto, perspiciatis.
						</p>
						<Link
							style={{
								fontSize: '24px',
								color: 'white',
								border: '1px solid white',
								paddingTop: '10px',
								paddingBottom: '10px',
								paddingRight: '50px',
								paddingLeft: '50px',
							}}
							to=''>
							Batafsil
						</Link>
					</Card>
				</div>
			</div>
			<div className='container'>
				<div className='study-format'>
					<h3 className='study-format__title'>Qulay o'quv formatlari</h3>
					<ul className='study-format__list'>
						<li className='study-format__item'>
							<Card
								hoverable
								style={{
									width: '300px',
									padding: '20px',
								}}
								cover={
									<img
										alt='example'
										src='https://proweb.uz/img/01.bdb4e6ce.webp'
									/>
								}>
								<Meta
									style={{ textAlign: 'center' }}
									title='Guruhda'
									description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
								reiciendis possimus. Eos dolorum fuga, vel est amet ea!
								Architecto, perspiciatis.'
								/>
							</Card>
						</li>
						<li className='study-format__item'>
							<Card
								hoverable
								style={{
									width: '300px',
									padding: '20px',
								}}
								cover={
									<img
										alt='example'
										src='https://proweb.uz/img/02.f5ebad11.webp'
									/>
								}>
								<Meta
									style={{ textAlign: 'center' }}
									title='Individual'
									description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
								reiciendis possimus. Eos dolorum fuga, vel est amet ea!
								Architecto, perspiciatis.'
								/>
							</Card>
						</li>
						<li className='study-format__item'>
							<Card
								hoverable
								style={{
									width: '300px',
									padding: '20px',
								}}
								cover={
									<img
										alt='example'
										src='https://proweb.uz/img/03.ae2a515a.webp'
									/>
								}>
								<Meta
									style={{ textAlign: 'center' }}
									title='Oflayn'
									description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
								reiciendis possimus. Eos dolorum fuga, vel est amet ea!
								Architecto, perspiciatis.'
								/>
							</Card>
						</li>
						<li className='study-format__item'>
							<Card
								hoverable
								style={{
									width: '300px',
									padding: '20px',
								}}
								cover={
									<img
										alt='example'
										src='https://proweb.uz/img/04.947624d0.webp'
									/>
								}>
								<Meta
									style={{ textAlign: 'center' }}
									title='Online'
									description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
								reiciendis possimus. Eos dolorum fuga, vel est amet ea!
								Architecto, perspiciatis.'
								/>
							</Card>
						</li>
					</ul>
				</div>
			</div>
			<div className='free-lesson'>
				<div className='container'>
					<div className='free-lesson__about'>
						<h3 className='free-lesson__title'>Bepul ochiq darslar</h3>
						<p className='free-lesson__text'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
							laboriosam illo amet, nihil itaque vero! Et dolorum sed
							perspiciatis tenetur.
						</p>
					</div>
					<div className='free-lesson__info'>
						<Select
							onChange={handleChange}
							style={{
								width: '600px',
							}}
							placeholder='Qiziqtirgan kursni tanglang'
							allowClear>
							<Option value='web'>Web dasturlash</Option>
							<Option value='max'>3D Max</Option>
							<Option value='android'>Android</Option>
							<Option value='flutter'>Flutter</Option>
						</Select>
					</div>
					<Row gutter={24}>
						<Col span={8}>
							<Select
							onClick={handleDate}
								style={{
									width: 300,
									padding:'0',
									backgroundColor:'transparent'
								}}>
								{
									courseData.map((item,i)=>(
										courseName==item.courseName && <Option  key={i}>{item.date}</Option>
									))
								}
							</Select>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

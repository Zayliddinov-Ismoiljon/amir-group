import React from 'react'
import { Link } from 'react-router-dom'
import './courseHeader.css'

export default function CourseHeader() {
  return (
    <div className='course'>
			<div className='container'>
				<div className='course__header'>
					{/* <a className='navbar-brand'> */}
						<img
							style={{ width: '100px', height: '50px' }}
							src='https://proweb.uz/img/logo.ca98f2ec.svg'
							alt='logo'
							className='logo'
						/>
					{/* </a> */}
					<ul className='course__list'>
						<li className='course__item'>
							<Link to='/kurslar' className='course__link'>
								Kurslar
							</Link>
						</li>
            <li className='course__item'>
							<Link to='/bepul-darslar' className='course__link'>
								Bepul darslar
							</Link>
						</li>
            <li className='course__item'>
							<Link to='/kovorking' className='course__link'>
								Kovorking
							</Link>
						</li>
            <li className='course__item'>
							<Link to='/Kontaktlar' className='course__link'>
								Kontaktlar
							</Link>
						</li>
            <li className='course__item'>
							<Link to='/vacancy' className='course__link'>
								Vacancy
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import CourseMain from '../../Component/CourseMain/CourseMain';
import './cource.css';
import CourseHeader from './courseHeader/courseHeader';

export default function Cource() {
	return (
		<>
			<CourseHeader/>
			<CourseMain />
		</>
	);
}

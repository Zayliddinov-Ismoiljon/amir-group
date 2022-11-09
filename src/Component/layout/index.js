
import HeaderTop from '../HeaderTop/HeaderTop';
import Sidebar from './sidebar';

const Layout = ({ children, data }) => {
	return (
		<>
			<HeaderTop />
			<div className='contents' style={{position: "relative", minHeight: "100vh"}}>
				<Sidebar routes={data} />
				<div className='content'>{children}</div>
			</div>
		</>
	);
};

export default Layout;

import Footer from '../Footer/Footer';
import HeaderTop from '../HeaderTop/HeaderTop';
import Sidebar from './sidebar';

const Layout = ({ children, data }) => {
	return (
		<>
			<HeaderTop />
			<div className='contents' style={{position: "relative", marginTop: 78, minHeight: "100vh"}}>
				<Sidebar routes={data} />
				<div className='content'>{children}</div>
			</div>
			<Footer />
		</>
	);
};

export default Layout;

import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
	useLocation,
} from 'react-router-dom';
import { route_data } from '.';
import Layout from '../Component/layout';
import Login from '../Component/Login/Login';
import Cource from '../Pages/cource/cource';
import Dashboard from '../Pages/dashboard';
import NotFound from '../Pages/notFound';

const RouterWrapper = () => {
	const url = useLocation((p) => p.auth).pathname;

	return (
		<>
			{(url === '/login' || url === '/course' ) ? (
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/course' element={<Cource />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			) : (
				<Layout data={route_data}>
					<Routes>
						{route_data.map((e, i) => (
							<Route key={i} path={e?.path} element={e?.component} />
						))}
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Layout>
			)}
		</>
	);
};

export default RouterWrapper;

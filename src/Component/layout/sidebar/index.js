import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

const Sidebar = ({ routes }) => {
	return (
		<div className='sidebar'>
			<div className='icon'></div>
      <div>
			<Menu theme='dark' mode='vertical' style={{position: "relative", top: 60}} defaultSelectedKeys={'0'}>
				{routes.map((e, i) => (
					<Menu.Item key={`${i}`}>
						{e.icon} <Link to={e?.path}> {e?.title} </Link>
					</Menu.Item>
				))}
			</Menu>
      </div>
		</div>
	);
};

export default Sidebar;

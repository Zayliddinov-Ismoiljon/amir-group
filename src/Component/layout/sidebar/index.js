import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

const Sidebar = ({ routes }) => {
	return (
		<div className='sidebar'>
      <div style={{paddingTop:'30px'}}>
			<Menu  mode='vertical' style={{position: "relative", backgroundColor:'#3D639D'}} defaultSelectedKeys={'0'}>
				{routes.map((e, i) => (
					<Menu.Item style={{ borderTopLeftRadius:'30px', borderBottomLeftRadius:'30px'}} key={`${i}`}>
						{e.icon} <Link to={e?.path}> {e?.title} </Link>
					</Menu.Item>
				))}
			</Menu>
      </div>
		</div>
	);
};

export default Sidebar;

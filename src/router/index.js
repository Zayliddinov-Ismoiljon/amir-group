import Main from "../Component/Main/Main";
import {FaHome, FaGoogle, FaWindows} from 'react-icons/fa'
import Dashboard from "../Pages/dashboard";
import Layout from "../Pages/Layout/Layout";
// import Olimpiadalar from "../Pages/Olimpiadalar/Olimpiadalar"


export const route_data = [
  {
    title: "Home",
    path: "/",
    component: <Dashboard/>,
    icon: <FaHome/>,
  },
  {
    title: "Layout",
    path: "/layout",
    component: <Layout/>,
    icon: <FaHome/>,
  },
  {
    title: "Olimpiadalar",
    path: "/olimpiadalar",
    component: "",
    icon: <FaGoogle/>,
  },
  {
    title: "IT kurslar",
    path: "/courses",
    component: <Main/>,
    icon: <FaWindows/>,
  },
]
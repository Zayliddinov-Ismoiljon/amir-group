import Main from "../Component/Main/Main";
import {FaHome, FaGoogle, FaWindows} from 'react-icons/fa'
import Dashboard from "../Pages/dashboard";
import Layout from "../Pages/Layout/Layout";
import Product from "../Component/Product/Product";


export const route_data = [
  {
    title: "главное",
    path: "/",
    component: <Dashboard/>,
    icon: <FaHome/>,
  },
  {
    title: "заказы",
    path: "/layout",
    component: <Layout/>,
    icon: <FaWindows/>,
  },
  {
    title: "оформить заказ",
    path: "/order",
    component: <Main/>,
    icon: <FaGoogle/>,
  },
  {
    // title: "оформить заказ",
    path: "/product/:id",
    component: <Product/>,
    // icon: <FaGoogle/>,
  },
]
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header"
import HomePage from "./HomePage/HomePage"
import Footer from './Footer/Footer';
import Login from '../Auth/Login';
import './customer.css'
import Product from "./Product/Product";
import ProductDetail from "./ProductDetail/ProductDetail";
import Register from "../Auth/register";
import ShoppingCart from "./ShopingCart/ShopingCart";
import OrderPage from "./Order/Order";
import CheckOutStatus from "./Order/CheckOutStatus";
import ScrollToTop from "./ActionComponents/ScrollTop";
import Profile from "./Profile/Profile";
import FixedChatButton from "../ChatApp/FixedChatButton";
import { useSelector } from "react-redux";
import AdminOrderDetail from "../AdminDashboard/AdminPage/AdminOrder/AdminOrderDetail";
import ResetPassword from "../Auth/ResetPassword";
import ReturnPassword from "../Auth/ReturnPassword";
import SearchPage from "../CustomerDashboard/Header/Search"
import { useEffect, useState } from "react";
import { getProducts } from "../../api/API_Product";
const CustomerPage = ()=>{
    const account = useSelector((state) => state.auth?.account);
    const [products, setProducts] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
            const fetchApi = async () => {
                setIsLoading(true)
                try {
                    const productData = await getProducts();
                    const activeProducts = productData.filter(product => product.state === 'active'); // Lọc sản phẩm có trạng thái "active"
                    setProducts(activeProducts);
                } catch (error) {
                    console.log("Không thể tải danh mục");
                }finally{
                    setIsLoading(false)
                }
            };
            fetchApi();
        }, []);
    return(
        <div className="main">
            <div className="header">
                <Header/>
            </div>
            <div className="body">
                <ScrollToTop/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/products' element={<Product/>} />
                <Route path='/product-detail/:productId' element={<ProductDetail/>} />
                <Route path='/login' element = {<Login/>}/>
                <Route path='/register' element = {<Register/>}/>
                <Route path='/reset-pass' element = {<ResetPassword/>}/>
                <Route path='/return-pass' element = {<ReturnPassword/>}/>
                <Route path='/cart' element = {<ShoppingCart/>}/>
                <Route path='/order' element = {<OrderPage/>}/>
                <Route path="/order/:orderId" element={<AdminOrderDetail/>}/>
                <Route path='/checkout-status' element = {<CheckOutStatus/>}/>   
                <Route path='/profile' element = {<Profile/>}/>   
                <Route path="/search" element={<SearchPage products={products} />} />
                {/* <HomePage/> */}
            </Routes>
            {account?.user && (
                <FixedChatButton />
            )}
            </div>
            {/* <div className="footer">
                <Footer/>
            </div> */}
        </div>
    )
}

export default CustomerPage
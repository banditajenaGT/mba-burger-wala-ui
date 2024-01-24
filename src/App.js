import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { loadUser } from './redux/actions/user';
import toast, { Toaster } from 'react-hot-toast'
import { ProtectedRoute } from 'protected-route-react'

import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import NotFound from './components/Layout/NotFound';
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import MyOrders from './components/Order/MyOrders';
import PaymentSuccess from './components/Cart/PaymentSuccess';
import Login from './components/Login';
import Profile from './components/Profile';
import OrderDetail from './components/Order/OrderDetail';
import Dashboard from './components/Admin/Dashboard';
import Users from './components/Admin/Users';
import Orders from './components/Admin/Orders';

import './style/App.scss';
import './style/header.scss';
import './style/home.scss';
import './style/founder.scss';
import './style/menu.scss';
import './style/footer.scss';
import './style/contact.scss';
import './style/about.scss';
import './style/cart.scss';
import './style/shipping.scss';
import './style/confirmOrder.scss';
import './style/paymentSuccess.scss';
import './style/login.scss';
import './style/profile.scss';
import './style/table.scss';
import './style/orderDetail.scss';
import './style/dashboard.scss';


function App() {

  const { error, message, isAuthenticated, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: "clearError" })
    }
    if (message) {
      toast.success(message)
      dispatch({ type: "clearMessage" })
    }
  }, [dispatch, error, message])

  return (
    <>
      <Router>
        <Header isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />

          <Route path='/login' element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
              <Login />
            </ProtectedRoute>
          } />

          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/profile' element={<Profile user={user} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/confirmorder' element={<ConfirmOrder />} />
            <Route path='/paymentsuccess' element={<PaymentSuccess />} />

            <Route path='/orders' element={<MyOrders />} />
            <Route path='/order/:id' element={<OrderDetail />} />
          </Route>
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
              />}
          >
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/users' element={<Users />} />
            <Route path='/admin/orders' element={< Orders />} />
          </Route>


          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      </Router>
    </>
  )
  // );
}

export default App;


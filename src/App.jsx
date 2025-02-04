import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import PaypalReturnPage from "./pages/shopping-view/paypal-return";
import PaymentSuccessPage from "./pages/shopping-view/payment-success";
import SearchProducts from "./pages/shopping-view/search";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TavicoHomeIntroduction from "./pages/shopping-view/introduction-CTCP-TavicoHome";
import TavicoNhaToChuc from "./pages/shopping-view/introduction-Tavico-nhatochuc";
import SupplierLayout from "./components/supplier-view/layout";
import SupplierProducts from "./pages/supplier-view/products";
import LoadingImg from "./assets/loading_animation.gif";
import ServiceGiaiTriAnUong from "./pages/shopping-view/services/service-giai-tri-an-uong";
import SupplierList from "./pages/shopping-view/supplier-list";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white">
        <img src={LoadingImg} alt="Loading..." />
      </div>
    );
  }

  console.log(isLoading, user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
        progress={undefined}
      />
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route
          path="/supplier"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <SupplierLayout />
            </CheckAuth>
          }
        >
          <Route path="products" element={<SupplierProducts />} />
        </Route>
        <Route path="/" element={<ShoppingLayout />}>
          <Route index element={<ShoppingHome />} />
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="paypal-return" element={<PaypalReturnPage />} />
          <Route path="payment-success" element={<PaymentSuccessPage />} />
          <Route path="search" element={<SearchProducts />} />
          <Route
            path="gioi-thieu/cong-ty-co-phan-tavico-home"
            element={<TavicoHomeIntroduction />}
          />
          <Route
            path="gioi-thieu/cong-ty-tavico-nha-to-chuc"
            element={<TavicoNhaToChuc />}
          />
          <Route path="nha-cung-cap" element={<SupplierList />} />
          <Route
            path="dich-vu/giai-tri-an-uong"
            element={<ServiceGiaiTriAnUong />}
          />
          <Route
            path="loaderio-f6d0603d86fe49da3611b3d4b380f513.txt"
            element={() => {
              window.location.href =
                "/loaderio-f6d0603d86fe49da3611b3d4b380f513.txt";
              return null;
            }}
          />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

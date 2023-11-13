import React, { useEffect } from "react";
import Counter from "./features/counter/Counter.jsx";
import "./App.css";
import ProductList from "./features/product/components/ProductList.jsx";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import UserOrderPage from "./pages/UserOrderPage.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from "./pages/Checkout.jsx";
import Protected from "./features/auth/components/Protected.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserId } from "./features/cart/cartAPI.js";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice.js";
import { selectLoggedInUser } from "./features/auth/authSlice.js";
import PageNotfound from "./pages/404.jsx";
import OrderSuccessPage from "./pages/OrderSuccessPage.jsx";
import UserOrders from "./features/user/components/UserOrders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage></CartPage>,
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>,
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>,
      </Protected>
    ),
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>,
  },
  {
    path: "/orders",
    element: (
      <Protected>
        <UserOrderPage></UserOrderPage>
      </Protected>
      // we will add page later right now using component directly.
    ),
  },
  {
    path: "*",
    element: <PageNotfound></PageNotfound>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

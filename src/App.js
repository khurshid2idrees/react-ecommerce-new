import React from 'react';
import  Counter  from './features/counter/Counter.jsx';
import './App.css';
import ProductList from './features/product-list/ProductList.jsx';
import Home from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import CartPage from './pages/CartPage.jsx';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element:<LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element:<SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element:<CartPage></CartPage>,
  },
]);

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;

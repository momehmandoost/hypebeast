import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import { Products } from "./pages/Products/Products";
import { Categories } from "./pages/categories/Categories";

import "./App.css"
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Signup } from "./pages/Signup/Signup.tsx";




const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/categories/:id",
        element: <Categories />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
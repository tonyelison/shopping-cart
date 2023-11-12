import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App";
import Nav from "./Nav";

const NavWrapper = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavWrapper />,
      errorElement: <>404</>,
      children : [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/shop",
          element: <>Shop</>,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
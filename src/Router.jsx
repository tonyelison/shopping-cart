import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <>Home</>,
      errorElement: <>404</>
    },
    {
      path: "/shop",
      element: <>Shop</>,
    }
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Router;
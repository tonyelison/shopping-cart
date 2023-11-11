import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>Home</>,
      errorElement: <>404</>
    },
    {
      path: "/shop",
      element: <>Shop</>,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
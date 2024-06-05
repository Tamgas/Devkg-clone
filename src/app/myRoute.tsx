import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../components/Layout/Layout";

function Myroute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />,
        </Layout>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Myroute;

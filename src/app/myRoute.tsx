import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../components/Layout/Layout";
import VacanciesPage from "../Pages/vacancies/vacanciesPage";
import Eventspage from "../Pages/events/Eventspage";
import Videos from "../Pages/Videos/Videos";
import OrganizationPage from "../Pages/organizations/OrganizationPage";
import CommunityPage from "../Pages/community/CommunityPage";

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
    {
      path: "/vacancies",
      element: (
        <Layout>
          <VacanciesPage />,
        </Layout>
      ),
    },
    {
      path: "/events",
      element: (
        <Layout>
          <Eventspage />,
        </Layout>
      ),
    },
    {
      path: "/videos",
      element: (
        <Layout>
          <Videos />,
        </Layout>
      ),
    },
    {
      path: "/organizations",
      element: (
        <Layout>
          <OrganizationPage />,
        </Layout>
      ),
    },
    {
      path: "/community",
      element: (
        <Layout>
          <CommunityPage />,
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

import Event2 from "./EVENT2/event2";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Event2 />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

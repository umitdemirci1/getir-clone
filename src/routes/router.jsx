import { createBrowserRouter } from "react-router-dom";
import Yemek from "../pages/yemek/Yemek";
import Main from "../pages/main/main";
import Buyuk from "../pages/buyuk/buyuk";
import Su from "../pages/su/su";
import Carsi from "../pages/carsi/carsi";
import GlobalLayout from "../layouts/global-layout";
import NotFound from "../pages/not-found/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "yemek",
        element: <Yemek />,
      },
      {
        path: "buyuk",
        element: <Buyuk />,
      },
      {
        path: "su",
        element: <Su />,
      },
      {
        path: "carsi",
        element: <Carsi />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const MainRouter = () => {
  const router = createHashRouter([
    { path: "/", element: <App /> },
    {
      path: "/:lang",
      element: <App />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;

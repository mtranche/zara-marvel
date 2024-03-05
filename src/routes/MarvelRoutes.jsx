import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import DetailPage from "../views/DetailPage";
import Favorites from "../views/Favorites";
import Error404 from "../views/404";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    errorElement:<Error404 />
  },
  {
    path:'/detail/:characterId',
    element:<DetailPage />
  },
  {
    path:'/favorites',
    element:<Favorites />
  }
]);
function MarvelRoutes (){
  return(
    <RouterProvider router={router} />
  );

};

export default MarvelRoutes;
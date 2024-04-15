// Fichier de routes (par exemple routes/index.js)
import Layout from "../Layout/Layout";
import Home from "../Home";
import Reservation from "../Pages/Reservation";

const routes = [
  {
    path: "/", // page d'accueil du site
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/reservation", element: <Reservation /> },
    ], // Cette route correspond également à la route racine ('/').
  },
];

export default routes;

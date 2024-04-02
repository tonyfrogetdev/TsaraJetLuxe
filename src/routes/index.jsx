// Fichier de routes (par exemple routes/index.js)
import Layout from "../Layout/Layout";
import Home from "../Home";

const routes = [
  {
    path: "/", // page d'accueil du site
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }], // Cette route correspond également à la route racine ('/').
  },
];

export default routes;

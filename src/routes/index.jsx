import Accueil from "../Accueil/Accueil";
import Layout from "../Layout/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: "",
            element: <Accueil />,
          },
        ],
      },
    ],
  },
];

export default routes;

import Navbar from "../components/Navbar/index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

       {/* Outlet agit comme un placeholder pour les composants enfants spécifiés dans votre configuration de routage.
          Lorsque vous naviguez vers une route spécifique qui est enfant de cette route 'Layout', 
          le composant pour cette route sera rendu ici. 
          
          Par exemple, si vous avez une route "/about" qui utilise Layout, et que vous naviguez vers "/about",
          le composant pour "/about" sera rendu à l'emplacement de cet Outlet. 
          
          Cela permet de conserver des éléments communs comme le Navbar sur toutes les pages, 
          tout en changeant le contenu principal selon la route à laquelle l'utilisateur accède. */}
          
      <Outlet />
    </>
  );
};

export default Layout;

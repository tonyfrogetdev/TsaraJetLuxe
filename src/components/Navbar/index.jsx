import { Link } from "react-router-dom"; // crée des liens vers différentes routes de l'app
import { Menu } from "lucide-react"; // pour les icones
import { useState } from "react"; // react

const Navbar = () => {
  const navLinks = [
    { title: "Accueil", path: "/" },
    { title: "Comment", path: "/comment" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
    { title: "Contactez-nous", path: "/contact" },
    { title: "FAQ", path: "/faq" },
  ];

  // etat pour gérer la visibilité en mode responsive
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Nouvel état pour le lien actif
  const [activeLink, setActiveLink] = useState("/");

  return (
    <nav className="relative z-[2] w-full my-auto mx-0 px-8 py-12 md:px-[200px] flex items-center justify-between">
      <span className="text-black text-[28px] font-semibold">TONYTONY</span>
      <div className="hidden md:flex items-center gap-7">
        {navLinks.map((navLink) => (
          <Link
            to={navLink.path}
            key={navLink.title}
            onMouseOver={() => setActiveLink(navLink.path)}
            className={`font-medium ${
              activeLink === navLink.path ? "text-green-500" : "text-black"
            }`}
          >
            {navLink.title}
          </Link>
        ))}
        <button className="bg-green-400 rounded-full text-gray-900 px-6 py-3 font-semibold hover:bg-red-500 hover:text-white">
          Réserve ton billet
        </button>
      </div>
      <div
        className="md:hidden block"
        onClick={() => setIsNavVisible(!isNavVisible)}
      >
        <Menu />
      </div>
      {isNavVisible && (
        <div className="absolute top-full left-0 w-full bg-black shadow-md flex flex-col items-center mt-2 py-5">
          {navLinks.map((navLink) => (
            <Link
              to={navLink.path}
              key={navLink.title}
              className="text-white py-2"
            >
              {navLink.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

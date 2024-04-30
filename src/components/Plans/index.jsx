import { motion } from "framer-motion";
import { AirplaneOutline, Star } from "react-ionicons";
import majunga from "../../assets/images/Majunga.webp";
import morondava from "../../assets/images/Morondava.jpg";
import nosybe from "../../assets/images/NosyBe.jpg";
const Plans = () => {
  const plansList = [
    {
      title: "Séjour à Mahajunga",
      image: majunga,
      code: "MahajungaLUXE",
      price: "1299",
      description:
        "Explorez la beauté de Majunga lors d'un voyage luxueux en jet privé & nuits dans un hôtel de luxe.",
    },
    {
      title: "Morondava & Aventures",
      image: morondava,
      code: "MorondavaLUXE",
      price: "999",
      description:
        "Découvrez Morondava lors d'un voyage luxueux avec notre service de transport.",
    },
    {
      title: "Private Plane",
      image: nosybe,
      code: "Charter B1732",
      price: "1699",
      description:
        "Envolez-vous vers NosyBe dans le confort de votre propre avion privé.",
    },
  ];

  return (
    <div className="flex w-full pt-5 pb-20 md:px-[200px] px-8 flex-col gap-16 justify-center items-center">
      <div className="flex flex-col w-full items-center">
        <span className="font-semibold text-blue-500">Nos Offres</span>
        <span className="font-semibold text-slate-700 text-3xl mt-1">
          Des Vols Pour Tous
        </span>
        <p className="max-w-[400px] text-center mt-4">
          Découvrez nos offres exceptionnelles pour des voyages de luxe et de
          confort.
        </p>
      </div>
      <div className="flex w-full items-center justify-center md:flex-row flex-col gap-8">
        {plansList.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-[10px] rounded-[10px] overflow-hidden"
            style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 / 5%)" }}
          >
            <motion.img
              src={plan.image}
              alt={plan.title}
              className="w-[400px] h-[270px] rounded-[10px] transition-transform duration-300 hover:scale-105"
            />
            <div className="flex w-full items-center justify-between mt-4 px-4">
              <span className="text-[18px] font-semibold text-slate-800">
                {plan.title}
              </span>
              <div className="flex items-center gap-[2px]">
                <Star color="#60a5fa" />
                <Star color="#60a5fa" />
                <Star color="#60a5fa" />
                <Star color="#60a5fa" />
                <Star color="#60a5fa" />
              </div>
            </div>
            <div className="text-gray-400 text-[15px] mt-[2px] font-medium px-4">
              {plan.code}
            </div>
            <div className="px-4 pt-4 leading-7 text-slate-700 max-w-[400px]">
              {plan.description}
            </div>
            <div className="text-slate-800 mt-10 font-medium px-4">
              <span className="text-blue-500 font-semibold text-[25px]">
                ${plan.price}
              </span>{" "}
              / Personne
            </div>
            <div className="w-[92%] mt-5 mx-auto border border-dashed border-slate-300" />
            <div className="w-full px-4">
              <button className="mt-5 mb-3 flex gap-3 bg-blue-400 px-5 py-2 text-white font-semibold rounded-full">
                <AirplaneOutline color="#fff" />
                Réserver Maintenant
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Plans;

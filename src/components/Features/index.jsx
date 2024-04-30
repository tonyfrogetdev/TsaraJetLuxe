import {
  ShieldCheckmarkOutline,
  EarthOutline,
  BedOutline,
} from "react-ionicons";

const Features = () => {
  const featuresList = [
    {
      icon: <BedOutline color="#60a5fa" style={{ width: 60, height: 60 }} />,
      title: "Hôtels à disposition",
      description:
        "Profitez de notre service exclusif d'hôtels gratuits pour des séjours confortables lors de vos voyages. Nous vous offrons les meilleurs hébergements pour un repos parfait après une journée bien remplie.",
    },
    {
      icon: (
        <ShieldCheckmarkOutline
          color="#60a5fa"
          style={{ width: 60, height: 60 }}
        />
      ),
      title: "Sécurité garantie",
      description:
        "Faites confiance à notre compagnie pour des voyages en toute sécurité. Nous mettons un point d'honneur à assurer la protection de nos passagers à chaque étape de leur voyage, de la réservation au retour à la maison.",
    },
    {
      icon: <EarthOutline color="#60a5fa" style={{ width: 60, height: 60 }} />,
      title: "Clients internationaux",
      description:
        "Rejoignez notre vaste communauté de voyageurs du monde entier. Avec des clients provenant des quatre coins du globe, vous rencontrerez une diversité culturelle et des échanges enrichissants lors de vos voyages avec TsaraJetLuxe.",
    },
  ];

  return (
    <div className="mt-[550px] md:mt-0 flex w-full py-20 md:px-[200px] px-8 flex-col gap-16 justify-center items-center">
      <div className="flex flex-col w-full items-center">
        <span className="font-semibold text-blue-500">Nos fonctionnalités</span>
        <span className="font-semibold text-slate-700 text-3xl mt-1 text-center">
          Nos fonctionnalités inestimables
        </span>
        <p className="max-w-[400px] text-center mt-4">
          Découvrez ce qui rend TsaraJetLuxe si unique. Nous vous offrons des
          services exceptionnels qui transforment chaque voyage en une
          expérience mémorable. Explorez nos fonctionnalités ci-dessous et
          préparez-vous à être émerveillé.
        </p>
      </div>

      <div className="flex md:flex-row flex-col w-full items-center justify-between md:gap-0 gap-5">
        {featuresList.map((feature) => (
          <div
            className="bg-white py-5 px-12 flex flex-col items-center justify-center gap-5 rounded-[10px] transition-all duration-300 cursor-pointer hover:scale-[1.05]"
            style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 / 5%)" }}
            key={feature.title}
          >
            {feature.icon}
            <span className="font-semibold text-gray-700 text-[21px]">
              {feature.title}
            </span>
            <span className="max-w-[360px] text-center leading-7">
              {feature.description}
            </span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

import { CheckmarkCircleOutline } from "react-ionicons";
import plane from "../../assets/images/AirMadagasikara.png";

const About = () => {
  return (
    <div className="w-full md:px-[200px] px-8 flex md:flex-row flex-col items-center justify-between py-10 md:gap-0 gap-16">
      <img
        className="md:w-[800px] md:h-[500px] w-full h-[350px] object-cover"
        src={plane}
        alt="Description de votre image"
      />

      <div className="flex flex-col md:w-[40%] w-full ">
        <span className="text-[15px] text-blue-600 font-semibold">
          À PROPOS DE NOUS
        </span>
        <span className="text-[30px] font-medium text-gray-700 mt-1">
          Nous sommes là pour vous apporter tout le confort et le plaisir
        </span>
        <p className="max-w-[650px] text-gray-600 leading-7 mt-5">
          Chez TsaraJetLuxe, nous croyons que chaque voyage devrait être une
          expérience de luxe et de sérénité. Nous mettons tout en œuvre pour
          vous offrir un service de qualité, avec une attention particulière à
          chaque détail. Découvrez un nouveau monde de voyages où votre confort
          et votre plaisir sont notre priorité absolue.
        </p>
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex items-center gap-3">
            <CheckmarkCircleOutline color="#60a5fa" />
            <span>Des voyages en toute sécurité et tranquillité.</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckmarkCircleOutline color="#60a5fa" />
            <span>Un service de qualité supérieure à chaque étape.</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckmarkCircleOutline color="#60a5fa" />
            <span>Une expérience de voyage inégalée.</span>
          </div>
        </div>
        <button className="bg-blue-400 px-6 py-3 text-white font-semibold rounded-full w-[200px] mt-12 shadow-md">
          Découvrir Plus
        </button>
      </div>
    </div>
  );
};

export default About;

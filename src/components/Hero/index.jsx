import { motion } from "framer-motion";
import plane from "../../assets/images/TsaraJetLuxenobg.png";
import { useInView } from "react-intersection-observer";
import { Plane } from "lucide-react";
import { useReservation } from "../../Context/ReservationContext";
import { useState } from "react";
import ReservationModal from "../Modal";
const Hero = () => {
  // destinations
  const [showModal, setShowModal] = useState();
  const { addReservation } = useReservation();

  const handleReservationSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const reservationData = Object.fromEntries(formData.entries());

    addReservation(reservationData);

    setShowModal(true);
    console.log(reservationData);
  };

  const destinations = [
    "Antananarivo",
    "Antsiranana",
    "Morondava",
    "Mahajunga",
    "Tuléar",
  ];

  // Instance animations du héro section
  // useInView est un hook qui anime les éléments quand ils apparaissent
  const { ref: refText, inView: inViewText } = useInView({
    triggerOnce: true, // L'animation doit se faire uqu'une fois
    threshold: 0.5, // Commence l'animation quand on voit l'élément à 50%
  });

  const { ref: refImage, inView: inViewImage } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="hero z-[1] w-full h-[80vh] grid place-items-center bg-slate-800 relative">
      <div className="grid md:grid-cols-2 max-w-[1640px] m-auto py-4">
        <motion.div
          ref={refText}
          initial={{ opacity: 0, y: 20 }}
          animate={inViewText ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col md:mt-0 justify-center md:items-start w-full px-2 gap-1">
            <h1 className="text-2xl capitalize italic text-white">
              TsaraJetLuxe, le luxe aérien Malagasy
            </h1>
            <h2 className="py-3 text-3xl uppercase  md:text-5xl font-bold text-red-500">
              chaque décollage est une expérience exceptionnelle
            </h2>
            <p className="text-2xl text-green-500">
              Avec TsaraJetLuxe, embarquez pour un voyage où luxe et sérénité se
              rencontrent, et laissez-nous vous transporter au-delà des nuages
              avec élégance.
            </p>
            <div className="flex space-x-4 mt-4 lg:w-full">
              <button className="w-full md:3/4 p-6 bg-malagasyflag  text-white text-center font-bold cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                Réserver dès maintenant
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={refImage}
          initial={{ opacity: 0, y: 20 }}
          animate={inViewImage ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div>
            <img
              className="mx-auto h-3/4 md:h-full md:rounded-3xl "
              src={plane}
              alt="/"
            />
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col  justify-center items-center py-4 px-4 md:max-w-[1060px] mx-auto md:my-auto bg-zinc-200 border-black rounded-xl shadow-xl ">
        <h4 className="text-xl font-semibold flex flex-row gap-4">
          Réservation <Plane size={30} />
        </h4>
        <form
          className="flex flex-col md:flex-row"
          onSubmit={handleReservationSubmit}
        >
          {["aller", "retour"].map((direction, index) => (
            <div key={index} className="py-1.5 px-2.5 flex-1">
              <p>Voyage {direction === "aller" ? "Aller" : "Retour"} </p>

              <div className="flex">
                <select
                  name={direction}
                  className="outline-none px-2 py-2 w-full"
                  required
                >
                  <option value="" hidden>
                    Sélectionnez
                  </option>
                  {destinations.map((destination, index) => (
                    <option key={index} value={destination}>
                      {destination}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Date du voyage aller </p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full"
              name="date"
              required
            />
          </div>

          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Date du voyage retour </p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full"
              name="date"
              required
            />
          </div>

          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Passager</p>
            <div className="flex flex-row">
              <select
                name="passagers"
                className="outline-none px-2 py-2 w-full"
                required
              >
                <option value="" hidden>
                  Sélectionnez
                </option>
                <option value="1">Une personne</option>
                <option value="2">Deux personnes</option>
                <option value="3">Trois personnes</option>
                <option value="4">Quatre personnes</option>
                <option value="5">Cinq personnes</option>
              </select>
            </div>
          </div>
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Classe du vol</p>
            <div className="flex flex-row">
              <select
                name="classebillet"
                className="outline-none px-2 py-2 w-full"
                required
              >
                <option value="" hidden>
                  Sélectionnez
                </option>
                <option value="Économie">Économie</option>
                <option value="SuperÉconomie">Super Économie</option>
                <option value="Business">Business</option>
              </select>
            </div>
          </div>
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <button
              type="submit"
              className="flex justify-center items-center bg-malagasyflag text-white rounded-lg   px-2 py-2 w-full"
            >
              <span>Réserve le vol</span>
            </button>
          </div>
        </form>
        <ReservationModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Hero;

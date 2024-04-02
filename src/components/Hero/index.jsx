import { motion } from "framer-motion";
import bgImg from "../../assets/images/TsaraJetLuxe.png";
import { useInView } from "react-intersection-observer";
const Hero = () => {
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
    <div className="w-full flex flex-col justify-center  ">
      <div className="grid md:grid-cols-2 max-w-[1340px] m-auto py-12">
        <motion.div
          ref={refText}
          initial={{ opacity: 0, y: 20 }}
          animate={inViewText ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col md:mt-0 justify-center md:items-start w-full px-2">
            <p className="text-2xl capitalize italic">
              TsaraJetLuxe, le luxe aérien Malagasy
            </p>
            <h1 className="py-3 text-3xl uppercase  md:text-5xl font-bold">
              chaque décollage est une expérience exceptionnelle
            </h1>
            <p className="text-2xl">
              Avec TsaraJetLuxe, embarquez pour un voyage où luxe et sérénité se
              rencontrent, et laissez-nous vous transporter au-delà des nuages
              avec élégance.
            </p>
            <div className="flex space-x-4 mt-4 lg:w-full">
              <button className="w-full md:3/4 p-6 bg-gradient-to-r from-green-300 to-blue-400  text-white text-center font-bold cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
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
              className="mx-auto h-3/4  md:w-3/4 md:h-full md:rounded-3xl "
              src={bgImg}
              alt="/"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

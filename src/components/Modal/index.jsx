import { Link } from "react-router-dom";

const ReservationModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="absolute md:fixed flex flex-col gap-2  items-center justify-center bg-white border border-black rounded-lg p-8">
          <div className="flex justify-start">
            <p className="text-lg text-center font-bold">
              Vol réservé et confirmé
            </p>
          </div>
          <Link to="/reservation">
            <button className="border border-slate-800 px-12 rounded-full hover:bg-red-500">
              Vers ma réservation
            </button>
          </Link>

          <button
            className="border border-slate-800 px-12 rounded-full hover:bg-green-500"
            onClick={() => setShowModal(false)}
          >
            Fermer
          </button>
        </div>
      )}
    </>
  );
};

export default ReservationModal;

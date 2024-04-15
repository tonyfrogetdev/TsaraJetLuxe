import { useReservation } from "../Context/ReservationContext.jsx";

const Reservation = () => {
  const { reservations } = useReservation();
  return (
    <div className="text-center flex flex-col gap-8">
      <h1 className="mt-5 text-3xl font-bold">Mes réservations :</h1>
      <ul className="text-lg flex flex-col gap-8">
        {reservations.map((reservation, index) => (
          <li key={index}>
            <p>Aller : {reservation.aller}</p>
            <p>Retour : {reservation.retour}</p>
            <p>Date : {reservation.date}</p>
            <p>Nombre de passagers : {reservation.passagers}</p>
            <p>Classe du billet : {reservation.classebillet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservation;

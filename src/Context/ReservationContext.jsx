import { createContext, useContext, useState } from "react";

// créer le context pour les réservation de billets

const ReservationContext = createContext();

// Composant pour gérer la reservation de billets

export const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);

  // fonction pour ajoutz la reservation

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <ReservationContext.Provider value={{ reservations, addReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};

// fonction utilitaire pour use le context

export const useReservation = () => {
  return useContext(ReservationContext);
};

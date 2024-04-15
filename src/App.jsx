import { useRoutes } from "react-router-dom";
import routes from "./routes/index";
import { ReservationProvider } from "./Context/ReservationContext";

const App = () => {
  const elements = useRoutes(routes);
  return (
    <>
      <ReservationProvider>{elements}</ReservationProvider>
    </>
  );
};

export default App;

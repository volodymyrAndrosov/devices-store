import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import NotificationList from "../src/components/NotificationList/NotificationList";
import AuthController from "./components/AuthController";

const App = () => {
  return (
    <BrowserRouter>
      <AuthController>
        <NotificationList />
        <NavBar />
        <AppRouter />
      </AuthController>
    </BrowserRouter>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import ReactModal from "react-modal";
import LoginPage from "./page/Auth/LoginPage";
import RegisterPage from "./page/Auth/RegisterPage";
import LoginSignUpLayOut from "./layout/LoginSignUpLayOut";
import CheckMailPage from "./page/Auth/CheckMailPage";
import ForgotPage from "./page/Auth/ForgotPage";
import CheckMailForgotPage from "./page/Auth/CheckMailForgotPage";
import HomePage from "./page/Home/HomePage";
ReactModal.setAppElement("#root");

function App() {
  return (
    <Routes>
      <Route element={<LoginSignUpLayOut />}>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/forgot" element={<ForgotPage />}></Route>
      </Route>
      <Route path="/users/:token" element={<CheckMailPage />}></Route>
      <Route
        path="/users/:token/:password"
        element={<CheckMailForgotPage />}
      ></Route>

      <Route>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

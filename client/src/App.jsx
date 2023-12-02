import { Routes, Route } from "react-router-dom";
import ReactModal from "react-modal";
import HomePage from "./page/Home/HomePage";
import LoginPage from "./page/Auth/LoginPage";

ReactModal.setAppElement("#root");

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  );
}

export default App;

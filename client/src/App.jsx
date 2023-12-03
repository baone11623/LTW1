import { Routes, Route } from "react-router-dom";
import ReactModal from "react-modal";
import HomePage from "./page/Home/HomePage";
import LoginPage from "./page/Auth/LoginPage";
import LayoutCommon from "./layout/LayoutCommon";

ReactModal.setAppElement("#root");

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route element={<LayoutCommon></LayoutCommon>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;

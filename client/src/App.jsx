import { Routes, Route } from "react-router-dom";
import ReactModal from "react-modal";
import LoginPage from "./page/Auth/LoginPage";
import LayoutCommon from "./layout/LayoutCommon";
import ShopPage from "./page/Shop/ShopPage";
import BlogPage from "./page/Blog/BlogPage";

import RegisterPage from "./page/Auth/RegisterPage";
import LoginSignUpLayOut from "./layout/LoginSignUpLayOut";
import CheckMailPage from "./page/Auth/CheckMailPage";
import ForgotPage from "./page/Auth/ForgotPage";
import CheckMailForgotPage from "./page/Auth/CheckMailForgotPage";
import HomePage from "./page/Home/HomePage";
import MyInfo from "./page/MyInfo/MyInfo";
ReactModal.setAppElement("#root");

function App() {
  return (
    <Routes>
      <Route element={<LayoutCommon></LayoutCommon>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
        <Route path="/my-info" element={<MyInfo></MyInfo>}></Route>
      </Route>
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
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import ReactModal from "react-modal";
import LoginPage from "./page/Auth/LoginPage";
import LayoutCommon from "./layout/LayoutCommon";
import ShopPage from "./page/Shop/ShopPage";
import BlogPage from "./page/Blog/BlogPage";
import HomePage from "./page/Home/HomePage";

import RegisterPage from "./page/Auth/RegisterPage";
import LoginSignUpLayOut from "./layout/LoginSignUpLayOut";
import CheckMailPage from "./page/Auth/CheckMailPage";
import ForgotPage from "./page/Auth/ForgotPage";
import CheckMailForgotPage from "./page/Auth/CheckMailForgotPage";
import LayoutAdmin from "./layout/LayoutAdmin";
import Product from "./page/admin/page/Product";
import Profile from "./page/admin/page/profile";
import BlogAdmin from "./page/admin/page/BlogAdmin";
import BlogDetail from "./page/Blog/BlogDetail";
import NotFoundPage from "./page/NotFoundPage";
import Info from "./page/MyInfo/Info";

ReactModal.setAppElement("#root");

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route element={<LayoutCommon></LayoutCommon>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
        <Route path="/my-info" element={<Info></Info>}></Route>
        <Route path="/blog/:id" element={<BlogDetail></BlogDetail>}></Route>
      </Route>
      <Route element={<LoginSignUpLayOut />}>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/forgot" element={<ForgotPage />}></Route>
      </Route>

      <Route element={<LayoutAdmin></LayoutAdmin>}>
        <Route path="/admin/dashboard" element={<Product></Product>}></Route>
        <Route path="/admin/my-profile" element={<Profile></Profile>}></Route>
        <Route path="/admin/blog" element={<BlogAdmin></BlogAdmin>}></Route>
      </Route>

      <Route path="/users/:token" element={<CheckMailPage />}></Route>
      <Route
        path="/users/:token/:password"
        element={<CheckMailForgotPage />}
      ></Route>

      <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
    </Routes>
  );
}

export default App;

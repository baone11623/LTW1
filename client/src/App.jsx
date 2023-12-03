import { Routes, Route } from "react-router-dom";
import ReactModal from "react-modal";
import LoginPage from "./page/Auth/LoginPage";
import LayoutCommon from "./layout/LayoutCommon";
import ShopPage from "./page/Shop/ShopPage";
import BlogPage from "./page/Blog/BlogPage";
<<<<<<< HEAD
import HomePage from "./page/Home/HomePage";

=======

import RegisterPage from "./page/Auth/RegisterPage";
import LoginSignUpLayOut from "./layout/LoginSignUpLayOut";
import CheckMailPage from "./page/Auth/CheckMailPage";
import ForgotPage from "./page/Auth/ForgotPage";
import CheckMailForgotPage from "./page/Auth/CheckMailForgotPage";
import HomePage from "./page/Home/HomePage";
import LayoutAdmin from "./layout/LayoutAdmin";
import Product from "./page/admin/page/Product";
import Profile from "./page/admin/page/profile";
import BlogAdmin from "./page/admin/page/BlogAdmin";
>>>>>>> 5d2135ec7dd4088d6dcc2b779ab26aa49175d403
ReactModal.setAppElement("#root");

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
=======
>>>>>>> 5d2135ec7dd4088d6dcc2b779ab26aa49175d403
      <Route element={<LayoutCommon></LayoutCommon>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
      </Route>
<<<<<<< HEAD
=======
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
>>>>>>> 5d2135ec7dd4088d6dcc2b779ab26aa49175d403
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import ReactModal from "react-modal";
import LoginPage from "./page/Auth/LoginPage";
import LayoutCommon from "./layout/LayoutCommon";
import ShopPage from "./page/Shop/ShopPage";
import BlogPage from "./page/Blog/BlogPage";
import HomePage from "./page/Home/HomePage";
import BlogAdmin from "./page/admin/page/BlogAdmin";
import LayoutAdmin from "./layout/LayoutAdmin";
import Product from "./page/admin/page/product";
import Profile from "./page/admin/page/profile";

ReactModal.setAppElement("#root");

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route element={<LayoutCommon></LayoutCommon>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
      </Route>

      <Route element={<LayoutAdmin></LayoutAdmin>}>
        <Route path="/admin/dashboard" element={<Product></Product>}></Route>
        <Route path="/admin/my-profile" element={<Profile></Profile>}></Route>
        <Route path="/admin/blog" element={<BlogAdmin></BlogAdmin>}></Route>
      </Route>
    </Routes>
  );
}

export default App;

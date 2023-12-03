import { Routes, Route } from "react-router-dom";
import ReactModal from "react-modal";
import LoginPage from "./page/Auth/LoginPage";
import LayoutCommon from "./layout/LayoutCommon";
import ShopPage from "./page/Shop/ShopPage";
import BlogPage from "./page/Blog/BlogPage";
import HomePage from "./page/Home/HomePage";

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
    </Routes>
  );
}

export default App;

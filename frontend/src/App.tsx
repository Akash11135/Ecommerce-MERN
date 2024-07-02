import { Route, Routes } from "react-router-dom";
import Home from "./assets/Components/Home.tsx";
import Intro from "./assets/Components/Intro.tsx";
import Login from "./assets/Components/Auth/Login.tsx";
import Register from "./assets/Components/Auth/Register.tsx";
import Profile from "./assets/Components/Profile/Profile.tsx";
import ProductDetails from "./assets/Components/Products/ProductDetails.tsx";
import CategoryProduct from "./assets/Components/Home/CategoryProduct.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Intro} />
      <Route path="/home" Component={Home} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/profile" Component={Profile} />
      <Route path="/product/:itemId" Component={ProductDetails} />
      <Route path="/category/product/:id" Component={CategoryProduct} />
    </Routes>
  );
}

export default App;

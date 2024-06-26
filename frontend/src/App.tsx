import { Route, Routes } from "react-router-dom";
import Home from "./assets/Components/Home.tsx";
import Intro from "./assets/Components/Intro.tsx";
import Login from "./assets/Components/Auth/Login.tsx";
import Register from "./assets/Components/Auth/Register.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Intro} />
      <Route path="/home" Component={Home} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
    </Routes>
  );
}

export default App;

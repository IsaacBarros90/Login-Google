import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {Sobre} from "./pages/Sobre";
import {Register} from "./pages/Cadastro";
import {Nav} from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
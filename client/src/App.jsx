import Header from "./components/Header";
import { Footer } from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Career from "./screens/Career";

import "./App.scss";
import "react-phone-number-input/style.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import "./App.scss";
import AOS from "aos";
import { Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Header from "./components/Header";

function App() {
  AOS.init();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

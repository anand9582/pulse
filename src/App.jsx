// * All styles in all components which will be render in App.js
import { Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Deals from "./components/Deals/Deals";
import Landing from "./components/Home/Landing";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation/Reservation";
import "./scss/main.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;

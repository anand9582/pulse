// * All styles in all components which will be render in App.js
import { Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Deals from "./components/Deals/Deals";
import Landing from "./components/Home/Landing";
import Oneplace from "./components/Deals/Oneplace";
import TestimonialSlider from './components/Deals/TestimonialSlider';
import GrowingBusiness from './components/Deals/GrowingBusiness';
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation/Reservation";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "./scss/main.scss"
const App = () => {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
          <Oneplace />
         <TestimonialSlider />
         <GrowingBusiness/>
      {/* <Loading /> */}
        
      {/* <Deals /> */}
    </div>
  );
}

export default App;
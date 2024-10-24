import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Headers from "./components/Headers";
import Home from "./components/Home";
import Privacy from "./components/Privacy";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";
import Career from "./components/CareerPage";

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contacts />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/career" element={<Career />} />
        <Route element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

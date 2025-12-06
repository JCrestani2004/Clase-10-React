import React from "react";
import Header from "./component/Header";
import Contacto from "./pages/Contacto";
import Footer from "./component/Footer";
import Error404 from "./pages/Error404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SinglePage from "./pages/SinglePage";
import BestSeller from "./pages/BestSeller";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/error404" element={<Error404 />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/shop/:categoria/:titulo" element={<Shop />} />
            <Route path="/single" element={<SinglePage />} />
            <Route path="/best" element={<BestSeller />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

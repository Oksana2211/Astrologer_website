import React from 'react';
// import { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// import style from '../../style/App.scss';
import { Home, Error, Prognostics, Tarot, NatalChart, Prices } from '../../pages'






function App() {


    return (


        <section>
            <Router>
                <Header />
                <Main />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/prognostics" element={<Prognostics />} />
                    <Route path="/tarot" element={<Tarot />} />
                    <Route path="/natalchart" element={<NatalChart />} />
                    <Route path="/prices" element={<Prices />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </section>


    );
}

export default App;

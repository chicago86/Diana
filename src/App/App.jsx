import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import About from "../About";
import Error from "../Error";
import Main from "../Main/Main";
import Services from "../Services";
import Contact from "../Contact";
import Project from "../Project";
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
    return (
    <>
    <Header />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
    <Footer/>
    </>
    )
}
export default App;
import React from "react";
import {Home} from "../components/Home";
import {About} from "../components/About";
import {Contact} from "../components/Contact";
import {Routes, Route} from "react-router-dom";

const App = () => {


    return (
        <Routes>
            <Route path="/" element = { <Home/> } />
            <Route path="/home" element = { <Home/> } />
            <Route path="/about" element = { <About/> } />
            <Route path="/contact" element = { <Contact/> }/>
        </Routes>
    );
}

export default App;

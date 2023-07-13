import React from 'react';
import './App.css';
import Content from "./components/StronaGlówna/StronaGlówna";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import AboutUs from "./components/O nas/ONas";
import NavBar from "./components/NavBar/Navbar";
import Rooms from "./components/Rooms/Rooms";
import Fotogalerea from "./components/Fotogalerea/Fotogalerea";
import Kontakts from "./components/Kontakts/Kontaks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';




const App = (props) => {



    return (

                <BrowserRouter>
                    <NavBar />
                        <Routes>
                            <Route path ='/home' element={<Content/>}/>
                            <Route path='/aboutUs' element={<AboutUs/>}/>
                            <Route path='/rooms' element={<Rooms/>}/>
                            <Route path='/foto' element={<Fotogalerea/>}/>
                            <Route path='/kontakt' element={<Kontakts/>}/>
                             <Route path = '*' element={<Navigate replace to = '/home' />}/>
                        </Routes>

                </BrowserRouter>

    )

}


export default App;

import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import "./style/navbarstyle.css";
import { LanguageContext } from "../Context/LanguageContext";


const words = {
    English: {
        home: "Home",
        about: "About",
        skills: "Skills",
        contact: "Contact"
    },

    Russian: {
        home: "Главная",
        about: "О себе",
        skills: "Навыки",
        contact: "Контакты"
    }
}



export default function Navbar(props) {

    const { language, changeLanguage } = useContext(LanguageContext);
    const { home, about, skills, contact } = words[language];

    const [active, setActive] = useState(false)

    function Toggle() {
        setActive(!active);
    }


    return (
        <header>
            <div className="header row">
                <div className="logo col-md-6">
                    <h3>Portfolio</h3>

                    <div className="navigation-bar">
                        <div onClick={Toggle} className="hamburger-menu">
                            <div className={`line line-1 ${active ? "change1" : ""}`}></div>
                            <div className={`line line-1 ${active ? "change2" : ""}`}></div>
                            <div className={`line line-1 ${active ? "change3" : ""}`}></div>
                        </div>
                    </div>
                </div>



                <div className={`navbar col-md-6 ${active ? "" : "bgcolor"}`}>
                    <ul>
                        <Link to="/">
                            <li onClick={() => setActive(!active)}>{home}</li>
                        </Link>

                        <Link to="/About.js">
                            <li onClick={() => setActive(!active)}>{about}</li>
                        </Link>

                        <Link to="/Skills.js">
                            <li  onClick={() => setActive(!active)}>{skills}</li>
                        </Link>

                        <Link to="/Contact.js">
                            <li  onClick={() => setActive(!active)}>{contact}</li>
                        </Link>

                        <select value={language} onChange={changeLanguage}>
                            <option value="English">EN</option>
                            <option value="Russian">RU</option>
                        </select>
                    </ul>
                </div>


            </div>
        </header>

    )
}



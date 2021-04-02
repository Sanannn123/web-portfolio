import React, { useContext } from 'react';
import "./Style/homestyle.css";
import { Link } from "react-router-dom";

import { LanguageContext } from "../Context/LanguageContext";


const words = {
    English: {
        hi: "Hi, I am Senan",
        front: "Front-End Developer",
        more: "Learn More",
    },

    Russian: {
        hi: "Хай, я Санан",
        front: "Front-End Разработчик",
        more: "Узнать больше",
    }
}

function Home(props) {

    const { language } = useContext(LanguageContext);
    const { hi, front, more } = words[language]


    return (
        <main id="home">
            <div>
                <div className="row">
                    <div className="left-side col-md-6">
                        <h1>{hi}</h1>
                        <span>{front}</span>
                        <br />
                        <button>
                            <Link to="/About.js">
                                {more}
                            </Link>
                        </button>
                    </div>

                    <div className="right-side col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="/Image/MEO_3314-2.jpg" alt="Portrait" />
                    </div>
                </div>

            </div>


        </main>
    )
}

export default Home

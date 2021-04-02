import React, { useContext } from 'react';
import "./Style/aboutstyle.css";
import { LanguageContext } from "../Context/LanguageContext"

const words = {
    English: {
        aboutMe: "About Me",
        aboutText: "Hi,my name is Senan Qiyaszade,a 20 year old Junior Front-End Developer,part-time Photographer and student of Economic University,based in Baku,Azerbaijan.I started my web journey from university, I'm also studying information technologies at the university to refine,broaden and deepen my knowledge.The main areas of my expertise are HTML(5), CSS(3) and JavaScript with React JS. I always explore ways of improving my efficiency and my main goal in development is to improve my knowledge and get best results in my career.",
        myResume: "My Resume",
        myEducation: "My Education",
        myUni: "Azerbaijan State University of Economics - UNEC",
    },

    Russian: {
        aboutMe: "О себе",
        aboutText: "Привет, меня зовут Санан Гиясзаде, 20-летний Front-End Разработчик, парт-тайм фотограф и студент Экономического университета из Баку.Я начал изучать программирование на 1-ом курсе,так как поступил в факультет информационных технологий и по сей день усердно занимаюсь,что бы расширить и углубить свои знания. В основном я работаю с HTML(5), CSS(3) и JavaScript(React JS). Моя главная цель в развитии - улучшить свои знания и добиться лучших результатов в карьере.",
        myResume: "Моё Резюме",
        myEducation: "Образование",
        myUni: "Азербайджанский государственный экономический университет - UNEC",
    }
}



function About(props) {
    const { language } = useContext(LanguageContext);
    const { aboutMe, aboutText, myResume, myEducation, myUni } = words[language]


    return (

        <div id="about">
            <div className="container" >
                <div className="about1" data-aos="zoom-in" data-aos-duration="2000">
                    <h1>{aboutMe}</h1>
                    <p>{aboutText} </p>
                </div>

                <br />

                <div className="resume">
                    <button>
                        <a href="/Files/Senan-resume-gold.pdf" target="_blank" title="Senan">{myResume}</a>
                    </button>

                </div>

                <br />

                <div className="about2">
                    <h1>{myEducation}</h1>
                    <div className="row">
                        <div className="unec col-md-12">
                            <i class="grad-cap fas fa-graduation-cap"></i>
                            <h2>{myUni}</h2>
                        </div>

                        <div className="matrix col-md-12">
                            <i class='code bx bx-code-alt'></i>
                            <h2>MATRIX Training Center</h2>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default About

import React,{useContext} from 'react';
import "./Style/skills.css";
import { LanguageContext } from "../Context/LanguageContext"

const words = { 
    English: {
        Skills: "Skills"
    },
    Russian: {
        Skills: "Навыки"
    }

}

function Skills(props) {
    const {language} = useContext(LanguageContext);
    const {Skills} = words[language] 


    return (
        <div className="container">
            <h1>{Skills}</h1>

            <div className="row">

                <div className="html col-md-4 " >
                    <i class="fab fa-html5"></i>
                    <span> HTML 5 </span>
                </div>

                <div className="css col-md-4 " >
                    <i class="fab fa-css3-alt"></i>
                    <span> CSS 3</span>
                </div>

                <div className="sass col-md-4 " >
                    <i class="fab fa-sass"></i>
                    <span> SASS </span>
                </div>

                <div className="bootstrap col-md-4 " >
                    <i class="fab fa-bootstrap"></i>
                    <span> Bootstrap </span>
                </div>

                <div className="javascript col-md-4" >
                    <i class="fab fa-js"></i>
                    <span> Javascript </span>
                </div>

                <div className="react col-md-4" >
                    <i class="fab fa-react"></i>
                    <span> React </span>
                </div>

                <hr />

                <div className="photoshop col-md-12" >
                    <img src="https://img.icons8.com/carbon-copy/452/adobe-photoshop.png" alt="Photoshop-icon" />
                    <span> Photoshop </span>
                </div>


            </div>
        </div>
    )
}

export default Skills

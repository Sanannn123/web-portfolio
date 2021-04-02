import React, { useContext, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import "./Style/contact.css";
import { LanguageContext } from "../Context/LanguageContext";
// import swal from "sweetalert"


const words = {
    English: {
        text: "Got a project in mind? Feel free to contact and discuss new projects.",
        labelName: "Name",
        inputName: "Enter Your Fullname",
        labelEmail: "E-mail",
        inputEmail: "Enter Your E-mail",
        emailErr: "E-mail can not be empty",
        incorrectEmail: "Incorrect E-mail",
        labelMessage: "Your Message",
        inputMessage: "Enter Your Message",
        button: "Send Message",
        follow: "Follow Me on",
        copyright: "© 2021. All rights are reserved."
    },
    Russian: {
        text: "Хотите создать новый проект,но не знаете с чего начать? Напишите мне и обсудим вместе :)",
        labelName: "Имя",
        inputName: "Введите ваше имя",
        labelEmail: "Е-майл",
        inputEmail: "Введите ваш Е-майл",
        emailErr: "Е-майл не может быть пустым",
        incorrectEmail: "Неверный Е-майл",
        labelMessage: "Сообщение",
        inputMessage: "Введите ваше сообщение",
        button: "Отправить",
        follow: "Также я в",
        copyright: "© 2021. Все права зашищены."
    }

}

function Contact(props) {
    const { language } = useContext(LanguageContext);
    const { text, labelName, inputName, labelEmail, inputEmail, emailErr, incorrectEmail, labelMessage, inputMessage, button, follow, copyright } = words[language];


    const [email, setEmail] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState(emailErr)
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError])


    const validateEmail = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError(incorrectEmail)
        } else {
            setEmailError("")
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email":
                setEmailDirty(true)
                break
        }
    }





    // const sweetAlert = () => {
    //     swal({
    //         title: "Good job!",
    //         text: "Your message has sent",
    //         icon: "success",
    //         button: "Got it"
    //     })
    // }


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_a120a33', e.target, 'user_rKvizU5ZcYmed29wwe701')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }


    return (
        <div >

            <div className="main-contact row">

                <div className="text col-md-6">
                    <span>
                        {text}
                    </span>
                </div>

                <div className="contact-form col-md-6">
                    <form onSubmit={sendEmail}>
                        <div className="contact">
                            <label htmlFor="name">{labelName}</label>
                            <input
                                name="name"
                                type="text"
                                placeholder={inputName}
                                required
                            />
                        </div>

                        <div className="contact">
                            <label htmlFor="email">{labelEmail}</label>
                            {(emailDirty && emailError) && <div className="error" style={{ color: "red" }}>{emailError}</div>}
                            <input
                                onBlur={e => blurHandler(e)}
                                onChange={e => validateEmail(e)}
                                value={email}
                                name="email"
                                type="email"
                                placeholder={inputEmail}
                                required />
                        </div>

                        <div className="contact">
                            <label htmlFor="message">{labelMessage}</label>
                            <textarea
                                name="message"
                                placeholder={inputMessage}
                                rows="5"
                                required />
                        </div>

                        <button
                        // onClick={sweetAlert()}
                            disabled={!formValid}
                            type="submit"
                            value="Send">{button}
                        </button>
                    </form>
                    <br />


                </div>

                <hr />

                <footer>
                    <div className="contact-footer">
                        <h3>{follow} </h3>
                        <div className="footer-icons">
                            <button>
                                <a href="https://www.facebook.com/cavid.rehmanov.9" target="_blank" rel="noreferrer" style={{ color: "black" }}> <i class="face fab fa-facebook-f"></i></a>
                            </button>

                            <button>
                                <a href="https://www.linkedin.com/in/senan-qiyaszade-05b07620a/" target="_blank" rel="noreferrer" style={{ color: "black" }}><i class="link fab fa-linkedin"></i></a>
                            </button>

                            <button>
                                <a href="https://github.com/Sanannn123" target="_blank" rel="noreferrer" style={{ color: "black" }}> <i class="git fab fa-github"></i></a>
                            </button>

                            <div className="footer-copyright">
                                <span>{copyright}</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Contact

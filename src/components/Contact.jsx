import LinkedIn from "../assets/linkedin.svg";
import Phone from "../assets/phone.svg";
import { Skill } from "./Skill";
import { Button } from "./Button";
import Send from "../assets/send.svg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {motion} from 'framer-motion';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34bfr0i",
        "template_km9isc6",
        form.current,
        "user_aFdDwylEm3OuZU7xFR8TL"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            window.alert("message sent successfully");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
          }
        },
        (error) => {
          window.alert(error);
        }
      );
  };

  return (
    <motion.div  whileInView={{
      x: [0, 0],
      y: [100, 0],
      opacity: [0, 1],
    }}
    transition={{ duration: 0.5, type: "spring" }}  className="contact">
      <div className="wrapper">
        <div className="title">
          <p>Contact</p>
          <p>wanna hire me? Let's Talk!</p>
        </div>
        <div className="links">
          <Skill color="#C3ECFF" className="box">
            <a href="https://www.linkedin.com/in/kaushik-sheel-691882157/" target='_blank' rel="noreferrer">
              <img src={LinkedIn} alt="icon" />
            </a>
          </Skill>
          <Skill color="#D6FFD2" className="box">
            <img src={Phone} alt="icon" />
            <p>+918299434789</p>
          </Skill>
        </div>

        <form onSubmit={sendEmail} ref={form} className="form">
          <div className="input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <div className="input">
          
            <Button >
              <img src={Send} alt="icon" />
              submit
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

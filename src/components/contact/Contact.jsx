import React from "react";
import "./Contact.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex flex-row eduu respoproj py-12">
      <div className="w-2/4 conttext">
        <h1>Have a Project Idea? Let's Talk!</h1>
        <p>I'm always excited to collaborate on innovative tech ideas, whether it's app development, AI integration, or solving real-world problems. Feel free to reach out if you'd like to brainstorm ideas, discuss a project, or work on something impactful together. Let's learn, build, and create meaningful solutions! </p>
        <div>
          <small>Email me at</small>
          <p>prathammatkar2506@gmail.com</p>
        </div>
        <div>
            <small>Follow</small>
            <div className="socials">
                <a href="https://www.instagram.com/pratham_2506_/" target="_blank"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/pratham-matkar-a2bb77257/" target="_blank"><FaLinkedinIn /></a>
            </div>
        </div>
      </div>

      <div className="w-2/4 formdiv">
        <form action="">
          <div className="flex flex-row gap-8 mb-6">
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Your email" />
          </div>

          <div className="flex flex-row gap-8 mb-6">
            <input type="text" placeholder="Your number" />
            <input type="text" placeholder="Your address" />
          </div>
          <div className="webcont">
            <input type="text" placeholder="Your website" />
          </div>
          <div className="webcont">
            <textarea
              name=""
              id=""
              placeholder="Project details, context, how can I help ..."
            ></textarea>
          </div>

          <button className="button mt-6">Get in touch</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

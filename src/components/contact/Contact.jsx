import React from "react";
import "./Contact.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex flex-row contt py-12">
      <div className="w-2/4 conttext">
        <h1>Tell me about your project</h1>
        <p>Tell me about your project</p>
        <p>
          After the inquiry, I will reply within 2-3 working days, with an
          approximate quote for the project or with questions for more details.
          After that, we can have an intro call to discuss your project and see
          if it's a match.
        </p>
        <div>
          <small>Email me at</small>
          <p>hi@kristi.digital</p>
        </div>
        <div>
            <small>Follow</small>
            <div className="socials">
                <a href=""><FaInstagram /></a>
                <a href=""><FaLinkedinIn /></a>
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

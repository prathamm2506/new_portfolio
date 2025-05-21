import React from "react";
import "./Experience.css";
import img1 from "../../assets/indrones.png";
import img2 from "../../assets/rhyno.png";
import img3 from "../../assets/thefastway.png";
import img4 from "../../assets/ati.png";
import img5 from "../../assets/ieee.png";

const Experience = () => {
  return (
    <div>
      <div className="eduu" id="expsec">
        <h1>Where Skills Met Impact</h1>

        <div className="flex items-center justify-between mt-12 flex-wrap respoedu">
          <div className="educard">
            <img src={img5} alt="img" className="w-1/4 lg:w-2/5" />
            <h2 className="mb-4">Senior Web Editor</h2>
            <p className="text-black">IEEE VES Institute of Technology</p>
            <br />
            <p className="mb-8">
            As Senior Web Editor at IEEE VEIST, I lead the development of our website and app, support event promotions, and mentor junior members. This role has helped me grow in leadership, collaboration, and technical execution.
            </p>
            <h4>May 2025 - Present</h4>
          </div>

          <div className="educard">
            <img src={img5} alt="img" className="w-1/4 lg:w-2/5" />
            <h2 className="mb-4">Junior Web Editor</h2>
            <p className="text-black">IEEE VES Institute of Technology</p>
            <br />
            <p className="mb-8">
            As Junior Web Editor at IEEE VEIST, I managed the chapter’s digital presence, conducted tech workshops, organized events, and built web/app solutions — laying the foundation for my growth in tech and leadership. 
            </p>
            <h4>July 2024 - March 2025</h4>
          </div>

          <div className="educard">
            <img src={img2} alt="img" className="w-1/4 lg:w-2/5" />
            <h2 className="mb-4">Web Developer Intern</h2>
            <p className="text-black">Rhyno Wheels Private Limited</p>
            <br />
            <p className="mb-8">
              Crafted the company’s official website from scratch, with the
              latest tech stack, reducing load times by 15% and improving user
              engagement up to 3X. - Performed daily tasks including deployment,
              site optimization, and SEO.{" "}
            </p>
            <h4>March 2024 - Aug 2024</h4>
          </div>

          <div className="educard">
            <img src={img1} alt="img" className="w-1/4 lg:w-2/5" />
            <h2 className="mb-4">R & D Intern</h2>
            <p className="text-black">Indrones Solution Private Limited</p>
            <br />
            <p className="mb-8">
              Designed and implemented software solutions to enhance drone
              operations, reducing latency by 50% through streamlining
              processes. - Implemented core scripts for faster drone operations
              saving 90% of actual time.
            </p>
            <h4>May 2024 - July 2024</h4>
          </div>

          

          <div className="educard">
            <img src={img4} alt="img" className="w-1/4 lg:w-2/5" />
            <h2 className="mb-4">Frontend Dev Intern</h2>
            <p className="text-black">Atican Labs Private Limited</p>
            <br />
            <p className="mb-8">
            Boosted website performance by 2X by implementing optimized
 frontend solutions using Next.js. Translated UI designs into interactive and responsive web
 pages. Worked collaboratively using BitBucket for code
 versioning.
            </p>
            <h4>Dec 2023 - Jan 2024</h4>
          </div>

          <div className="educard">
            <img src={img3} alt="img" className="w-1/4 lg:w-2/5" />
            <h2 className="mb-4">Web Developer Intern</h2>
            <p className="text-black">The Fast Way</p>
            <br />
            <p className="mb-8">
              Delivered two major web projects, improving site responsiveness
              and usability by 30%. Implemented full-stack solutions within fast
              development cycles, getting hands-on experience with industry
              practices.{" "}
            </p>
            <h4>Jan 2023 - June 2023</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

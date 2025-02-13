import React from "react";
import "./Testimonial.css";
import img1 from '../../assets/gaurang.png'
import img2 from '../../assets/kasturesir.png'
import img3 from '../../assets/suyash.png'


const Testimonial = () => {
  return (
    <div className="w-full testclass py-20" id="testsec">
      <div className="contt flex flex-row gap-20 responsivetest">
        <div className="w-2/4">
          <div className="mb-12">
            <p>
              “Pratham is a passionate and skilled developer, who helped us develop an android application for integrating our live streaming platform with the drones. He also optimized a few control algorithms for efficient performance.”
            </p>
            <div className="flex gap-8 justify-start items-center mt-6">
              <img
                 src={img3}
                 alt="img"
                 className="w-20"
              />
              <div className="flex flex-col">
                <p>Suyash Mali</p>
                <small>R & D Engineer, Indrones Solutions</small>
              </div>
            </div>
          </div>

          <div>
            <p>
              “Pratham, as Jr Web Editor, has significantly improved our online presence through his dedication, creativity, and technical skills.”
            </p>
            <div className="flex gap-8 justify-start items-center mt-6">
              <img
                src={img1}
                alt="img"
                className="w-20"
              />
              <div className="flex flex-col">
              <p>Gaurang Rane</p>
              <small>Chairperson at IEEE VESIT</small>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/4">
          <h2>
            “An innovative and passionate student who excels in web development, data analytics, and project-building.”
          </h2>
          <div className="flex gap-8 justify-start items-center mt-6">
              <img
                src={img2}
                className="w-2/12"
              />
              <div className="flex flex-col">
                <p>Prof. Subhash Kasture</p>
                <small>Founder C-AIML Mumbai, Nodal Officer for Indo-Israel Cybersecurity Connect, Govt of Maharashtra</small>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

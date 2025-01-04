import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="w-full testclass py-20">
      <div className="contt flex flex-row gap-20 responsivetest">
        <div className="w-2/4">
          <div className="mb-12">
            <p>
              “In everything Kristina does, you can see that Product Design and
              supporting people is a passion of hers...Students are over the
              moon, and they specifically ask for her as their mentor.”
            </p>
            <div className="flex gap-8 justify-start items-center mt-6">
              <img
                src="https://cdn.prod.website-files.com/5e8c566954381032f62e178b/657c8f4633ef9488b56ce4c9_Jessica%20Ibbotson.png"
                alt="img"
                className="w-2/12"
              />
              <div className="flex flex-col">
                <p>Jessica Ibbotson</p>
                <small>Education Coordinator at Dribbble</small>
              </div>
            </div>
          </div>

          <div>
            <p>
              “In everything Kristina does, you can see that Product Design and
              supporting people is a passion of hers...Students are over the
              moon, and they specifically ask for her as their mentor.”
            </p>
            <div className="flex gap-8 justify-start items-center mt-6">
              <img
                src="https://cdn.prod.website-files.com/5e8c566954381032f62e178b/657c8f4633ef9488b56ce4c9_Jessica%20Ibbotson.png"
                alt="img"
                className="w-2/12"
              />
              <div className="flex flex-col">
                <p>Jessica Ibbotson</p>
                <small>Education Coordinator at Dribbble</small>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/4">
          <h2>
            “Kristina is hands down the most creative and skilled designer I've
            ever worked with.”
          </h2>
          <div className="flex gap-8 justify-start items-center mt-6">
              <img
                src="https://cdn.prod.website-files.com/5e8c566954381032f62e178b/657c8ce42acc03238f8fb7e0_Diana%20Prohoda.webp"
                alt="img"
                className="w-2/12"
              />
              <div className="flex flex-col">
                <p>Jessica Ibbotson</p>
                <small>Education Coordinator at Dribbble</small>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

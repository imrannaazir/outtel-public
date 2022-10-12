import React from "react";
import TopBanner from "../Shared/TopBanner";

const About = () => {
  return (
    <div>
      <TopBanner img="https://www.askdigital.net/wp-content/uploads/2019/12/about.jpg" />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://d2m6ke2px6quvq.cloudfront.net/uploads/2020/10/15/d5d552a9-4307-4465-a3be-2b6657be8d43.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-[3vw] font-bold">
              We are leading company in this field, We provide specific
              solutions for our every customers.
            </h1>
            <p className="py-6">
              When you give to Our Charity, know your donation is making a
              difference Whether you are supporting one our Signature Programs
              or our carefully curated list of Gifts That Give More, our ut
              professional staff.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

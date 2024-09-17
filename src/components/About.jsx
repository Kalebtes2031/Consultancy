import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col justify-center p-6 items-center">
        <h1 className="text-center font-serif font-extrabold text-3xl p-1">
          ABOUT US
        </h1>
        <hr className="w-24 h-2 bg-slate-950 rounded border-2 mb-8" />
        <p className="w-[800px] text-center font-serif">
          Kaleb Consultancy is one of the top educational consultants and
          Overseas-Study Experts that guides you to the top of success.
          Moreover, we offer chances for a wide variety of courses in various
          universities around the world. We help you to accomplish the future as
          you desire.
        </p>
      </div>
      <div className="flex flex-row p-12 justify-center ">
        <div className="flex flex-col p-4 ">
          <h2 className="font-serif font-extrabold text-xl p-1">KC?</h2>
          <hr className="w-24 h-2 bg-slate-950 rounded border-2 mb-8" />
          <p className="font-serif">
            KC is a premier overseas education facilitator and a credible
            consultation enterprise that offers the very best learning
            opportunities worldwide to a wide range of students.
          </p>
          <h2 className="font-serif font-extrabold text-xl p-1 mt-6">
            Our Goal
          </h2>
          <hr className="w-24 h-2 bg-slate-950 rounded border-2 mb-8" />
          <p className="font-serif">
            We aim to offer you genuine, quality, comprehensive, unbiased, and
            ethical professional education services.
          </p>
        </div>
        <div className="p-6">
          <img
            src="student.jpg"
            alt=""
            className=" border rounded-3xl object-contain"
          />
        </div>
        <div className="flex flex-col p-4">
          <h2 className="font-serif font-extrabold text-xl p-1">
            Meet our expert counselors and undergo counseling about abroad
            study!
          </h2>
          <hr className="w-24 h-2 bg-slate-950 rounded border-2 mb-8" />
          <p className="font-serif">
            We help you to choose the best university and country based on your
            background and interests. Our career counseling and admission
            guidance help you to choose a suitable course abroad.
          </p>
          <h2 className="font-serif font-extrabold text-xl p-1 mt-6">Vision</h2>
          <hr className="w-24 h-2 bg-slate-950 rounded border-2 mb-8" />
          <p className="font-serif">
            We cherish the values of transparency, accountability as well as
            reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

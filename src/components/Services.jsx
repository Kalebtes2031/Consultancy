import React from "react";

const Services = () => {
  return (
    <section>
      <div className="flex flex-col justify-center p-6 items-center">
        <h1 className="text-center font-serif font-extrabold text-3xl p-1">
          OUR SERVICES
        </h1>
        <hr className="w-24 h-2 bg-slate-950 rounded border-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-16">
        {[
          {
            title: "Career Guidance",
            description:
              "Our seasoned team of counselors is committed to assisting you in exploring various career paths. We provide personalized guidance to help you understand the potential courses available and how they align with your interests and background.",
            imgSrc: "promotion.png",
          },
          {
            title: "Admission Support",
            description:
              "To ensure an error-free and complete application for students, we offer proper Guidance throughout the entire admission process.",
            imgSrc: "admission.png",
          },
          {
            title: "University Selection Assistance",
            description:
              "Our institution provides support in selecting suitable universities, guiding you through the process to ensure a smooth transition for your education.",
            imgSrc: "university.png",
          },
          {
            title: "Visa Assistance",
            description:
              "We offer Visa assistance services for our clients right from the process of application filling to document preparation.",
            imgSrc: "visa.png",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center border-2 rounded-lg p-8 bg-gradient-to-br from-indigo-500 to-purple-700 text-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-75 blur-lg group-hover:blur-xl transition duration-500"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-20 h-20 mb-4  object-cover shadow-md transition-transform duration-500 transform group-hover:rotate-6"
              />
              <h3 className="font-serif font-extrabold text-2xl mb-3 text-center">
                {item.title}
              </h3>
              <p className="font-serif text-center text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

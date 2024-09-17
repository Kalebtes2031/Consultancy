import React from "react";

const Process = () => {
  const steps = [
    {
      imgSrc: "contact.png",
      stepName: "CONTACT",
      stepNumber: "1",
      description: "Reach out to us for initial consultation and guidance."
    },
    {
      imgSrc: "chat.png",
      stepName: "CHAT",
      stepNumber: "2",
      description: "Engage in a chat to discuss your needs and goals."
    },
    {
      imgSrc: "application.png",
      stepName: "SUBMIT APPLICATION",
      stepNumber: "3",
      description: "Complete and submit your application "
    },
    {
      imgSrc: "fly.png",
      stepName: "START YOUR ADVENTURE",
      stepNumber: "4",
      description: "Prepare to embark on your academic journey."
    },
  ];

  return (
    <section id="process" className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen py-16 relative overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">
          APPLICATION PROCESS
        </h1>
        <div className="relative inline-block">
          <hr className="w-32 h-1 bg-white rounded" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-300 blur-md"></div>
        </div>
      </div>

      {/* Steps Container */}
      <div className="relative flex justify-center items-end h-[500px] mx-auto max-w-4xl">
        {/* Steps Cards */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`absolute transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl rounded-lg bg-white p-6 shadow-xl flex flex-col items-center justify-center
            ${index === 0 ? "left-[-10%] bottom-6" : ""}
            ${index === 1 ? "left-[25%] bottom-[25%]" : ""}
            ${index === 2 ? "left-[60%] bottom-[44%]" : ""}
            ${index === 3 ? "left-[95%] bottom-[62%]" : ""}
            `}
            style={{ width: "200px", height: "200px" }} // Equal size for all steps
          >
            {/* Step Circle */}
            <div className="absolute top-[-23px] left-[-24px] w-16 h-16 bg-white rounded-full border-4 border-yellow-500 flex items-center justify-center p-2">
              <span className="text-yellow-500 text-center font-bold text-xl">Step {step.stepNumber}</span>
            </div>

            {/* Step Content */}
            <img
              src={step.imgSrc}
              alt={step.stepName}
              className="w-16 h-16 mb-4 rounded shadow-lg transition-transform duration-500 transform hover:rotate-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 ml-3">{step.stepName}</h3>
            <p className="text-gray-600 font-serif text-center text-sm ">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;

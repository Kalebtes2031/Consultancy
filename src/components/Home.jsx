import React from "react";

const Process = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('solution.jpg')` }} // Use your background image here
    >
      {/* Shaded overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      {/* Content on top of the background */}
      <div className="absolute inset-0 top-28 flex flex-row items-center justify-between max-w-7xl mx-auto px-4 z-10">
        <div className="flex-1 mr-6">
          <p className=" poppins-bold leading-relaxed text-white">
           <span className="text-5xl">Travel <span className="text-teal-400">and</span> Educational <span className="text-teal-400">Consultant</span></span> 
           <hr className="w-16 mt-4 border-2 rounded"/>
            <br />
            <span className="poppins-medium">"Your trusted one"</span> 
          </p>
        </div>
        <div className="flex-1 text-center">
        <div className="rounded-3xl p-2 border-gradient-glow animate-float"> {/* Border container */}
            <img
              src="student.jpg"
              alt="people"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

const About = () => {
  return (
    <>
      <div
        className="flex flex-row justify-around w-full h-screen mx-auto bg-darkBlue"
        id="About"
      >
        <div className="flex flex-col w-full max-w-2xl my-auto space-y-8 text-white">
          <h1 className="text-3xl font-bold text-center font-customfont">
            About
          </h1>
          <p className="max-w-4xl mx-auto text-start font-Inter">
            Hello! I am currently 22 years old and I live in Tangerang and
            currently in my 4th semester. My hobby is of course as I mentioned
            above, watching football, playing games, and of course coding in
            everyday life :D
          </p>
          <p className="max-w-4xl mx-auto font-Inter text-start">
            I am seeking an internship opportunity in web development to refine
            my technical skills, gain exposure to industry best practices, and
            make meaningful contributions to projects.
          </p>
        </div>
        <div className="flex flex-col w-full max-w-2xl my-auto space-y-8 text-white font-Inter">
          <h1 className="text-3xl font-bold text-center font-customfont">
            Education
          </h1>
          <div>
            <h2 className="text-xl font-semibold">SMA Bina Insani</h2>
            <p className="text-gray-300">2017 - 2020</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Universitas Muhammadiyah Tangerang
            </h2>
            <p className="text-gray-300">2022 - Now</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

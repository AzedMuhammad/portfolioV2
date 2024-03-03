const About = () => {
  return (
    <>
      <div className="flex w-full h-screen bg-darkBlue">
        <div className="container flex flex-col min-w-full my-auto space-y-8 text-white ">
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
      </div>
    </>
  );
};

export default About;

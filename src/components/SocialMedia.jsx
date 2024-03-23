const SocialMedia = () => {
  return (
    <div className="container flex flex-row justify-around mx-auto font-Inter">
      <div className="w-full space-y-16">
        <h1 className="text-3xl text-center text-white font-customfont">
          Connect with me
        </h1>

        <div className="flex flex-row items-center justify-center space-x-6">
          <img
            src="./src/assets/socmed/instagram.png"
            alt="instagram"
            className="h-20"
          />
          <img
            src="./src/assets/socmed/github.png"
            alt="github"
            className="h-20"
          />
          <img
            src="./src/assets/socmed/linkedin.png"
            alt="linkedin"
            className="h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

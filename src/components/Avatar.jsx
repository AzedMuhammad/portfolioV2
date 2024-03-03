const Avatar = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-darkBlue" id="Home">
        <img
          src="../src/assets/coding.png"
          alt="coding"
          className="object-cover w-full overflow-hidden h-1/2"
        />

        <img
          src="../src/assets/avatar.png"
          alt="avatar"
          className="absolute object-cover m-auto -translate-x-1/2 -translate-y-1/2 border-darkBlue rounded-full border-[14px] w-52 h-50 left-1/2 top-2/4"
        />
        <div className="container min-w-full mx-auto space-y-4">
          <h1 className="mt-32 text-4xl font-bold text-center text-white font-customfont">
            Azed Muhammad Noval
          </h1>
          <p className="text-lg text-center text-white font-Inter">
            Website Dev | Football Enthusiast | Gamer
          </p>

          <div className="flex flex-row justify-center pt-10 mx-auto space-x-20">
            <img src="../src/assets/programmer.png" alt="" className="h-24" />
            <img src="../src/assets/gamer.png" alt="" className="h-24" />
            <img src="../src/assets/soccer.png" alt="" className="h-24" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;

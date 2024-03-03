const Achievements = () => {
  return (
    <div className="w-full h-screen bg-darkBlue" id="Achievements">
      <div className="container flex flex-col items-center justify-center h-full mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-white font-customfont">
          That I have gained as a gamer
        </h1>
        <div className="flex flex-row max-w-6xl mx-auto space-x-6 rounded-md ">
          <div className="rounded-md bg-slate-200">
            <img
              src="./src/assets/Me/azed1.jpg"
              alt="photoCard"
              className="object-cover w-full h-72"
            />
            <p className="p-4 font-Inter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              quasi nobis sed dolorum voluptatem dignissimos assumenda similique
              consectetur alias? Distinctio.
            </p>
          </div>
          <div className="rounded-md bg-slate-200">
            <img
              src="./src/assets/Me/azed2.jpg"
              alt="photoCard"
              className="object-cover w-full h-72"
            />
            <p className="p-4 font-Inter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              quasi nobis sed dolorum voluptatem dignissimos assumenda similique
              consectetur alias? Distinctio.
            </p>
          </div>
          <div className="rounded-md bg-slate-200">
            <img
              src="./src/assets/Me/azed3.jpg"
              alt="photoCard"
              className="object-cover w-full h-72"
            />
            <p className="p-4 font-Inter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              quasi nobis sed dolorum voluptatem dignissimos assumenda similique
              consectetur alias? Distinctio.
            </p>
          </div>
          <div className="rounded-md bg-slate-200">
            <img
              src="./src/assets/Me/azed4.jpg"
              alt="photoCard"
              className="object-cover w-full h-72"
            />
            <p className="p-4 font-Inter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              quasi nobis sed dolorum voluptatem dignissimos assumenda similique
              consectetur alias? Distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

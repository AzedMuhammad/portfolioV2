const Navbar = () => {
  return (
    <>
      <div className="fixed z-10 min-w-full">
        <nav className="flex m-auto mt-2 rounded-full w-fit backdrop-blur-3xl">
          <ul className="flex px-12 py-3 space-x-6 font-semibold text-white font-Inter">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Achievements">Achievements</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

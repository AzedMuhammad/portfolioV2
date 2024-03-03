const Navbar = () => {
  return (
    <>
      <div className="fixed z-10 min-w-full">
        <nav className="flex m-auto mt-2 rounded-full w-fit backdrop-blur-3xl">
          <ul className="flex p-6 space-x-6 font-semibold text-white font-Inter">
            <li>Home</li>
            <li>About</li>
            <li>Achievements</li>
            <li>Education</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

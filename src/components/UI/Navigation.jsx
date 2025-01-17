const Navigation = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 left-0 w-full bg-white z-50 p-4">
      <div>
        {/* logo */}
      </div>
      <div className="flex w-1/3 justify-between items-center">
        <a href="/about" className="text-2xl text-[#252525] font-raleway no-underline">
          About
        </a>
        <a href="/" className="text-2xl text-[#252525] font-raleway no-underline">
          Projects
        </a>
        <a href="#" className="text-2xl text-[#252525] font-raleway no-underline">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navigation;

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[64px] bg-white flex items-center justify-between px-[146px] z-50 shadow-sm">
      <h1 className="text-[18px] font-semibold text-gray-800">
        Gamification
      </h1>

      <div className="flex items-center justify-center gap-4">
        <button className="relative p-2 rounded-full cursor-pointer">
          <img src="./notification-bell.svg" alt="Notification Icon" width={25} height={25} />
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center">
            5
          </span>
        </button>

        <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm cursor-pointer">
          <img
            src="./user-profile.svg"
            alt="User Profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

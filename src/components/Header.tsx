import logo from "../assets/images/logo.svg";
import arrowDown from "../assets/images/arrow_down.svg";

export const Header = () => {
  return (
    <header className="bg-navy-blue-900 w-full px-4 py-5">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo" />
        <div className="flex items-center gap-3 md:gap-11">
          <p className="text-white font-bold">USER NAME</p>
          <img src={arrowDown} alt="arrow down" />
        </div>
      </div>
    </header>
  );
};

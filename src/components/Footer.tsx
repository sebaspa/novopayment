import isotipo from "../assets/images/isotipo.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-robins-egg-blue-500 w-full h-1"></div>
      <div className="bg-navy-blue-900 w-full py-4 md:pt-14 md:pb-12">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 md:flex-row items-center justify-between">
            <img src={isotipo} alt="isotipo" />
            <p className="text-white text-xs sm:text-base">&copy; 2022 Novopayment Inc. All rights reserved.</p>
            <img src={isotipo} alt="isotipo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

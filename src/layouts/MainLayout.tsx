import { Outlet } from "react-router-dom";
import { Footer, Header, Navbar } from "../components";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-[550px]">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

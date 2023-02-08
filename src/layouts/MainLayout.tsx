import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-[550px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

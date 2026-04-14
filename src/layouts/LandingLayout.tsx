import Navbar from "@/components/Header/Navbar";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div className="min-h-dvh w-full relative pt-16 md:pt-16 px-5 md:px-28">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LandingLayout;

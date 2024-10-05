import React from "react";
import AsideBar from "../../core/main_components/asideBar/asideBar";
import LandingPage from "../landingPage/landingPage";
import { useLocation } from "react-router-dom";
import SecondPage from "../secondPage/secondPage";

function MainLayout() {
  const { pathname } = useLocation();
  return (
    <div className="w-full flex h-screen    ">
      <div className="w-1/5 border">
        <AsideBar />
      </div>

      <div className="w-4/5 border">
        {pathname.includes("2") ?  <SecondPage /> : <LandingPage />}
      </div>

      <div></div>
    </div>
  );
}

export default MainLayout;

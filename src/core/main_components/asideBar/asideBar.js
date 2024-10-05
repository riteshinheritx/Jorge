import React from "react";
import Logo from "../../../assets/svgs/logo.svg";
import { Link, useLocation } from "react-router-dom";

function AsideBar() {
  const { pathname } = useLocation();
  return (
    <div className="flex p-4 gap-10 flex-col justify-center items-center">
      <Link to={"/main"}>
        <img src={Logo} alt="company logo" width={80} />
      </Link>
      {pathname.includes("2") && (
        <div className="w-30 p-6 rounded-full bg-slate-200">PIM</div>
      )}
    </div>
  );
}

export default AsideBar;

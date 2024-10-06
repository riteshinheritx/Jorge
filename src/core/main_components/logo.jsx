import React from "react";
import { Link } from "react-router-dom";
import { SiteLogo } from "../../pages/layouts/SvgIcons";

function Logo() {
  return (
    <>
      <Link to={"/"} className={"flex w-full space-x-2 items-center"}>
        <span className={"icon"}>
          <SiteLogo />
        </span>
        <span className="logo_name">Jorge</span>
      </Link>
    </>
  );
}

export default Logo;

import React from "react";
import Logo from "../../assets/svgs/logo.svg";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handlePageClick = () => {
    navigate("/main-2");
  };

  return (
    <div
      onClick={handlePageClick}
      className="flex gap-10 p-4 flex-col justify-evenly h-full items-center"
    >
      <img src={Logo} alt='company logo' width={200} />
    </div>
  );
}

export default LandingPage;

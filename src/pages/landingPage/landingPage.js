import React from "react";
import Logo from "../../assets/svgs/logo.svg";
import Message from "../../core/sub_components/message/message";
import { sampleData } from "../../utils/variables";
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

      <Message message={sampleData} />
    </div>
  );
}

export default LandingPage;

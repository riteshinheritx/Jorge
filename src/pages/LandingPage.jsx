import React from "react";
import { useNavigate } from "react-router-dom";
import { SiteLogo } from "./layouts/SvgIcons";
import { sampleData } from "../utils/variables";
import Message from "../core/main_components/message";

function LandingPage() {
  const navigate = useNavigate();

  const handlePageClick = () => navigate("/pim");

  return (
    <div
      onClick={handlePageClick}
      className="flex gap-10 flex-col justify-evenly h-full items-center"
    >

      <div className={"my-auto"}>
        <SiteLogo size={250}/>
      </div>

      <Message className={"mt-auto"}>
        <p>{sampleData}</p>
      </Message>
    </div>
  );
}

export default LandingPage;

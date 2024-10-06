import React from "react";
import { useNavigate } from "react-router-dom";
import Message from "../../core/sub_components/message/message";
import {SiteLogo} from "../layouts/SvgIcons";
import {sampleData} from "../../utils/variables";

function LandingPage() {
  const navigate = useNavigate();

  const handlePageClick = () => navigate("/pim");

  return (
    <div
      onClick={handlePageClick}
      className="flex gap-10 flex-col justify-evenly h-full items-center"
    >

      <SiteLogo size={250}/>

      <div className={"text-left"}>
        <p>{sampleData}</p>
      </div>
    </div>
  );
}

export default LandingPage;

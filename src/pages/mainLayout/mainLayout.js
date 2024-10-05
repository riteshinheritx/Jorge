import React, { useEffect, useState } from "react";
import AsideBar from "../../core/main_components/asideBar/asideBar";
import LandingPage from "../landingPage/landingPage";
import { useLocation } from "react-router-dom";
import SecondPage from "../secondPage/secondPage";
import Message from "../../core/sub_components/message/message";
import { sampleData } from "../../utils/variables";

function MainLayout() {
  const { pathname } = useLocation();
  const [message, setMessage] = useState(sampleData)

  useEffect(()=>{

    if(pathname.includes("2")){
        setMessage("Select the action you want to execute.")
    } else{
        setMessage(sampleData)
    }
  },[pathname])

  return (
    <div className="w-full flex h-screen    ">
      <div className="w-1/5 border">
        <AsideBar />
      </div>

      <div className="w-4/5 h-full border">
      <div className="h-4/5">
        {pathname.includes("2") ?  <SecondPage /> : <LandingPage />}
        </div>
        <div className="h-1/5"> <Message message={message}/></div>
      </div>

    </div>
  );
}

export default MainLayout;

import {Link} from "react-router-dom";
import NavMenu from "./NavMenu";
import {AngleLeftIcon, SiteLogo} from "./SvgIcons";
import {useState} from "react";

const SidebarLayout = () => {

  const [isCollapsed, setIsCollapsed] = useState(false)

  return <div className={`sidebar-layout--wrapper ${isCollapsed ? "open" : ""}`}>

    <button
      style={{
        transform: `rotate(${isCollapsed ? 0 : 180}deg)`,
      }}
      className={"toggle-action absolute flex items-center justify-center -right-3 top-2 rounded-full"}
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      <AngleLeftIcon size={10}/>
    </button>

    <div className="logo-details w-full mt-2">
      <Link to={"/"} className={"flex w-full space-x-2 items-center"}>
        <span className={"icon"}><SiteLogo/></span>
        <span className="logo_name">Jorge</span>
      </Link>
    </div>

    <NavMenu isCollapsed={isCollapsed}/>

  </div>
}
export default SidebarLayout;
import {Link} from "react-router-dom";
import {PimIcon} from "./SvgIcons";


const navItems = [
  {
    key: "nav_pim",
    link: "/pim",
    svgIcon: <PimIcon size={25}/>,
    title: "Project Management",
  }
]

const NavMenu = (props) => {

  return <ul className={`nav-list`}>
    {navItems.map(nav => {
      return (<li key={nav.key} className={"w-full"}>
        <Link to={nav.link} className={"flex w-full space-x-2 items-center py-2"}>
          <span className={"icon"}>{nav.svgIcon}</span>
          <span className="links_name">{nav.title}</span>
        </Link>
      </li>)
    })}
  </ul>
}

export default NavMenu
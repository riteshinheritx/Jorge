import SidebarLayout from "./SidebarLayout";
import PrimaryLayout from "./PrimaryLayout";
import "./style.scss";

const RootLayouts = () => {
  return (
    <div className={"root-layout--wrapper"}>
      <SidebarLayout />
      <PrimaryLayout />
    </div>
  );
};
export default RootLayouts;

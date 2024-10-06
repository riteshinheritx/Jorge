import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";

const PrimaryLayout = () => {
  return (
    <section className={"primary-layout-wrapper p-6 w-full h-screen"}>
      <HeaderLayout />
      <Outlet />
    </section>
  );
};
export default PrimaryLayout;

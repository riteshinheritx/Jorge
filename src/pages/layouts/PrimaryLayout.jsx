import { Outlet } from "react-router-dom";

const PrimaryLayout = () => {
  return (
    <section className={"primary-layout-wrapper p-6 w-full h-screen"}>
      <Outlet />
    </section>
  );
};
export default PrimaryLayout;

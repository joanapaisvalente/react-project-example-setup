import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="h-screen flex flex-col items-center">
        <div className="w-4/5">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

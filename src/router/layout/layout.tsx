import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./components/footer/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="w-4/5 mb-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

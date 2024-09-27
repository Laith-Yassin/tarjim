import { ProConfigProvider } from "@ant-design/pro-components";
import { ConfigProvider } from "antd";
import en from "antd/lib/locale/en_US";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import AllRoutes from "./AllRoutes";
import Footer from "./components/Footer";
import './style/Layout.css'; // Add custom CSS here

const Layout = () => {
  return (
    <ConfigProvider locale={en}>
      <ProConfigProvider>
        <BrowserRouter>
          <div className="layout-container">
            <NavBar />
            <div className="layout-content">
              <AllRoutes />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </ProConfigProvider>
    </ConfigProvider>
  );
};

export default Layout;

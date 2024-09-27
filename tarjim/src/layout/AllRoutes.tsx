import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import ProductServices from "../views/ProductServices";
import AboutUs from "../views/AboutUs";
import Community from "../views/Community";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product_services" element={<ProductServices />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  );
};

export default AllRoutes;

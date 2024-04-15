import React from "react";
import SEO from "../common/seo";
import HomeOne from "../pages/404,jsx";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"SMAS Bintang Timur 1 Balige"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;

import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home-3";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={""} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;

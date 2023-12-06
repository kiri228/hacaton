import React, { useEffect } from "react";
import PaginationOutlined from "../components/Pagination";
import HeroList from "../components/HeroList";
import Filter from "../components/Filter";
import BackVideo from "../components/back/BackVideo";

const HomePage = () => {
  return (
    <>
      <Filter />
      <HeroList />
      <BackVideo />
      <PaginationOutlined />
    </>
  );
};

export default HomePage;

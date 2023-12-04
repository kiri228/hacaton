import React, { useEffect } from "react";
import PaginationOutlined from "../components/Pagination";
import HeroList from "../components/HeroList";
import Filter from "../components/Filter";

const HomePage = () => {
  return (
    <>
      <Filter />
      <HeroList />
      <PaginationOutlined />
    </>
  );
};

export default HomePage;

import React, { useEffect } from "react";
import { useProducts } from "../contexts/hero/HeroContextProvider";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PaginationOutlined from "../components/Pagination";
import ProductsList from "../components/HeroList";
import Filter from "../components/Filter";

const ProductsPage = () => {
  return (
    <>
      <Filter />
      <ProductsList />
      <PaginationOutlined />
    </>
  );
};

export default ProductsPage;

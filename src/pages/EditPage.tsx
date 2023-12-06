import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { categories } from "../utils/consts";
import { useProducts } from "../contexts/hero/HeroContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import BackVideo from "../components/back/BackVideo";

const EditPage = () => {
  const { oneProduct, getOneProduct, editProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    img: "",
    category: "",
    description: "",
    skillA: "",
    imageA: "",
    textA: "",
    skillB: "",
    imageB: "",
    textB: "",
    skillC: "",
    imageC: "",
    textC: "",
    ultimate: "",
    imageU: "",
    textU: "",
  });

  const nav = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id!);
  }, []);

  useEffect(() => {
    oneProduct && setProduct(oneProduct);
  }, [oneProduct]);

  const handleChange = (e: any) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editProduct(id!, product);
    nav("/");
  };
  return (
    <>
      <BackVideo />
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "30%",
          padding: "10px",
          margin: "auto",
          marginTop: "10px",
          backgroundColor: "#fff",
          border: "3px solid #1976D2",
          borderRadius: "30px",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="Title"
          type="text"
          variant="standard"
          name="title"
          value={product.title}
        />
        <TextField
          value={product.price}
          onChange={handleChange}
          id="standard-search"
          label="Price"
          type="number"
          variant="standard"
          name="price"
        />
        <FormControl fullWidth sx={{ width: "65%" }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={product.category}
            label="Category"
            onChange={handleChange}
            name="category"
          >
            {categories.map((cat) => (
              <MenuItem value={cat.value}>{cat.title}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          value={product.image}
          onChange={handleChange}
          id="standard-search"
          label="Image"
          type="url"
          variant="standard"
          name="image"
        />

        <Button type="submit" variant="contained">
          Save
        </Button>
      </Box>
    </>
  );
};

export default EditPage;

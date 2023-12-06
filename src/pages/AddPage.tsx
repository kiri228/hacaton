import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import { useProducts } from "../contexts/hero/HeroContextProvider";
import { notify } from "../components/Toastify";
import { useNavigate } from "react-router-dom";
import { categories } from "../utils/consts";
import BackVideo from "../components/back/BackVideo";

const AddPage = () => {
  const { addProduct } = useProducts();

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

  const handleChange = (e: any) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const nav = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !product.title.trim() ||
      !product.price ||
      !product.category.trim() ||
      !product.description.trim() ||
      !product.image.trim() ||
      !product.img.trim() ||
      !product.skillA.trim() ||
      !product.imageA.trim() ||
      !product.textA.trim() ||
      !product.skillB.trim() ||
      !product.imageB.trim() ||
      !product.textB.trim() ||
      !product.skillC.trim() ||
      !product.imageC.trim() ||
      !product.textC.trim() ||
      !product.ultimate.trim() ||
      !product.imageU.trim() ||
      !product.textU.trim()
    ) {
      notify("Заполните поля!");
      return;
    }
    addProduct(product);
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
        />
        <TextField
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
              <MenuItem value={cat.value} sx={{ color: "#000" }}>
                {cat.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="Description"
          type="text"
          variant="standard"
          name="description"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="Image"
          type="url"
          variant="standard"
          name="image"
        />

        <TextField
          onChange={handleChange}
          id="standard-search"
          label="Img"
          type="url"
          variant="standard"
          name="img"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="SkillA"
          type="url"
          variant="standard"
          name="skillA"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="ImageA"
          type="url"
          variant="standard"
          name="imageA"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="textA"
          type="url"
          variant="standard"
          name="textA"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="SkillB"
          type="url"
          variant="standard"
          name="skillB"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="ImageB"
          type="url"
          variant="standard"
          name="imageB"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="textB"
          type="url"
          variant="standard"
          name="textB"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="SkillC"
          type="url"
          variant="standard"
          name="skillC"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="ImageC"
          type="url"
          variant="standard"
          name="imageC"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="textC"
          type="url"
          variant="standard"
          name="textC"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="Ultimate"
          type="url"
          variant="standard"
          name="ultimate"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="ImageU"
          type="url"
          variant="standard"
          name="imageU"
        />
        <TextField
          onChange={handleChange}
          id="standard-search"
          label="textU"
          type="url"
          variant="standard"
          name="textU"
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>
    </>

  );
};

export default AddPage;

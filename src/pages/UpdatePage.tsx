import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useProducts } from "../contexts/hero/HeroContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePage = () => {
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
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30ch" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "30%",
        padding: "20px 0",
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
        value={product.description}
        onChange={handleChange}
        id="standard-search"
        label="Description"
        type="text"
        variant="standard"
        name="description"
      />

      <TextField
        value={product.img}
        onChange={handleChange}
        id="standard-search"
        label="Image"
        type="url"
        variant="standard"
        name="img"
      />
      <TextField
        value={product.skillA}
        onChange={handleChange}
        id="standard-search"
        label="SkillA"
        type="url"
        variant="standard"
        name="skillA"
      />
      <TextField
        value={product.imageA}
        onChange={handleChange}
        id="standard-search"
        label="ImageA"
        type="url"
        variant="standard"
        name="imageA"
      />
      <TextField
        value={product.textA}
        onChange={handleChange}
        id="standard-search"
        label="TextA"
        type="url"
        variant="standard"
        name="textA"
      />
      <TextField
        value={product.skillB}
        onChange={handleChange}
        id="standard-search"
        label="SkillB"
        type="url"
        variant="standard"
        name="skillB"
      />
      <TextField
        value={product.imageB}
        onChange={handleChange}
        id="standard-search"
        label="ImageB"
        type="url"
        variant="standard"
        name="imageB"
      />
      <TextField
        value={product.textB}
        onChange={handleChange}
        id="standard-search"
        label="TextB"
        type="url"
        variant="standard"
        name="textB"
      />
      <TextField
        value={product.skillC}
        onChange={handleChange}
        id="standard-search"
        label="SkillC"
        type="url"
        variant="standard"
        name="skillC"
      />
      <TextField
        value={product.imageC}
        onChange={handleChange}
        id="standard-search"
        label="ImageC"
        type="url"
        variant="standard"
        name="imageC"
      />
      <TextField
        value={product.textC}
        onChange={handleChange}
        id="standard-search"
        label="TextC"
        type="url"
        variant="standard"
        name="textC"
      />
      <TextField
        value={product.ultimate}
        onChange={handleChange}
        id="standard-search"
        label="Ultimate"
        type="url"
        variant="standard"
        name="ultimate"
      />
      <TextField
        value={product.imageU}
        onChange={handleChange}
        id="standard-search"
        label="ImageU"
        type="url"
        variant="standard"
        name="imageU"
      />
      <TextField
        value={product.textU}
        onChange={handleChange}
        id="standard-search"
        label="TextU"
        type="url"
        variant="standard"
        name="textU"
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </Box>
  );
};

export default UpdatePage;

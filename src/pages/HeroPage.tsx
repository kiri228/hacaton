import { CardActionArea } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useProducts } from "../contexts/hero/HeroContextProvider";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../contexts/auth/AuthContextsProvider";

const HeroPage = () => {
  const { getOneProduct, oneProduct } = useProducts();

  const { isAdmin } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id!.toString());
  }, []);

  return (
    <Card
      key={oneProduct?.id}
      sx={{
        maxWidth: 1000,
        width: "100%",
        backgroundColor: "#4B5860",
        margin: " 20px auto 0",
      }}
    >
      <Typography
        sx={{
          margin: "10px",
          textAlign: "center",
          textTransform: "uppercase",
          fontFamily: "Reaver, serif",
          fontWeight: "700",
          color: "#fff",
        }}
        gutterBottom
        variant="h5"
        component="div"
      >
        {oneProduct?.title}
      </Typography>
      <CardActionArea sx={{ display: "flex" }}>
        <CardActionArea
          sx={{
            maxWidth: 470,
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: 410 }}
            image={oneProduct?.img}
            title={oneProduct?.title}
            alt="img"
          />
          <Typography
            sx={{
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                textAlign: "center",
                color: "#0288D1",
                fontWeight: "600",
              }}
              gutterBottom
              variant="h6"
              component="div"
            >
              Category: {oneProduct?.category}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                color: "#fff",
              }}
              variant="body2"
            >
              {oneProduct?.description}
            </Typography>
          </Typography>
        </CardActionArea>
        <CardActionArea sx={{ padding: "20px" }}>
          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
              color: "#0288D1",
              fontWeight: "600",
            }}
            variant="body2"
          >
            {oneProduct?.skillA}
            <Avatar
              alt="skillA"
              src={oneProduct?.imageA}
              sx={{ width: 60, height: 60 }}
            />{" "}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              color: "#fff",
            }}
            variant="body2"
          >
            {oneProduct?.textA}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
              color: "#0288D1",
              fontWeight: "600",
            }}
            variant="body2"
          >
            {oneProduct?.skillB}
            <Avatar
              alt="skillA"
              src={oneProduct?.imageB}
              sx={{ width: 60, height: 60 }}
            />{" "}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              color: "#fff",
            }}
            variant="body2"
          >
            {oneProduct?.textB}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
              color: "#0288D1",
              fontWeight: "600",
            }}
            variant="body2"
          >
            {oneProduct?.skillC}
            <Avatar
              alt="skillC"
              src={oneProduct?.imageC}
              sx={{ width: 60, height: 60 }}
            />{" "}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              color: "#fff",
            }}
            variant="body2"
          >
            {oneProduct?.textC}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
              color: "#0288D1",
              fontWeight: "600",
            }}
            variant="body2"
          >
            {oneProduct?.ultimate}
            <Avatar
              alt="Ultimate"
              src={oneProduct?.imageU}
              sx={{ width: 60, height: 60 }}
            />{" "}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              color: "#fff",
            }}
            variant="body2"
          >
            {oneProduct?.textU}
          </Typography>
        </CardActionArea>
      </CardActionArea>
      {isAdmin() && (
        <CardActions sx={{ gap: "10px", justifyContent: "center" }}>
          <Link to={`/update/${oneProduct?.id}`}>
            <Button variant="contained" color="info">
              Update
            </Button>
          </Link>
        </CardActions>
      )}
    </Card>
  );
};

export default HeroPage;

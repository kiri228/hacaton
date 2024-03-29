import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useCartContext } from "../contexts/cart/CartContextProvider";
import { useNavigate } from "react-router-dom";
import BackVideo from "../components/back/BackVideo";

const SuccessPage = () => {
  const { clearCart } = useCartContext();
  const nav = useNavigate();
  useEffect(() => {
    clearCart();
    setTimeout(() => {
      nav("/");
    }, 2000);
  }, []);
  return (
    <>
      <BackVideo />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily: "Georgia, serif;",
          fontWeight: "700",
          color: "#fff",
        }}
      >
        <Typography variant="h2">Thank you for your order!</Typography>
      </Box>
    </>
  );
};

export default SuccessPage;

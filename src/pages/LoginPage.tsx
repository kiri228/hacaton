import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useAuth } from "../contexts/auth/AuthContextsProvider";
import { Navigate } from "react-router-dom";
import BackVideo from "../components/back/BackVideo";

export default function LoginPage() {
  const { login, user } = useAuth();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    login(data.get("email") as string, data.get("password") as string);
  };

  if (user) {
    return <Navigate to="/" />;
  }
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
          width: "25%",
          padding: "40px 20px",
          margin: "auto",
          marginTop: "150px",
          backgroundColor: "#fff",
          border: "3px solid #1976D2",
          borderRadius: "20px",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          autoComplete="email"
          id="standard-search"
          label="Email"
          type="email"
          variant="standard"
          name="email"
        />
        <TextField
          id="standard-search"
          label="Password"
          type="password"
          variant="standard"
          name="password"
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </>
  );
}

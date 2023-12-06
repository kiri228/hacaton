import React, { useEffect, useState } from "react";
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/hero/HeroContextProvider";

const searchTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input": {
            color: "#fff",
          },
        },
      },
    },
  },
});

const Livesearch = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = useState(searchParams.get("x") || "");

  const { getProducts, setPage } = useProducts();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setsearchParams({
      ...currentParams,
      x: searchVal,
    });
    getProducts();
    setPage(1);
  }, [searchVal]);
  return (
    <ThemeProvider theme={searchTheme}>
      <TextField
        InputProps={{
          startAdornment: (
            <SearchIcon
              sx={{
                color: "#fff",
                margin: "0 10px 0 0",
                fontSize: "30px",
              }}
            />
          ),
        }}
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search..."
        sx={{
          border: "2px solid #fff",
          borderRadius: "10px",
        }}
        id="outlined-basic"
        variant="outlined"
      />
    </ThemeProvider>
  );
};

export default Livesearch;

import { TextField, ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/hero/HeroContextProvider";
import { setEmitFlags } from "typescript";

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
  const [searchVal, setSearchVal] = useState(searchParams.get("q") || "");

  const { getProducts, setPage } = useProducts();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setsearchParams({
      ...currentParams,
      q: searchVal,
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
                marginLeft: "20px",
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
          borderRadius: "8px",
        }}
        id="outlined-basic"
        variant="outlined"
      />
    </ThemeProvider>
  );
};

export default Livesearch;

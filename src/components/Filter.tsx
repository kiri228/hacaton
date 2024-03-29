import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LIMIT, categories } from "../utils/consts";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/hero/HeroContextProvider";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );

  const { getProducts, setPage } = useProducts();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    if (category === "all") {
      const { _page, x } = currentParams;

      searchParams.delete("category");
      setSearchParams({
        _limit: LIMIT.toString(),
        _page: (_page || 1).toString(),
        x: x || "",
      });
    } else {
      setSearchParams({
        ...currentParams,
        category,
      });
    }
    setPage(1);
    getProducts();
  }, [category]);
  return (
    <Box sx={{ width: "fit-content", margin: "30px auto" }}>
      <ToggleButtonGroup
        onChange={(e, value) => value && setCategory(value[0])}
        aria-label="text button group"
      >
        {categories.map((cat) => (
          <ToggleButton
            key={cat.id}
            value={cat.value}
            sx={{
              color: "#fff",
              fontWeight: "500",
              border: "2px solid #fff",
              padding: "10px 20px",
            }}
          >
            {cat.title}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default Filter;

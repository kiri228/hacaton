import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { ClipLoader } from "react-spinners";
import { useProducts } from "../contexts/hero/HeroContextProvider";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth/AuthContextsProvider";
import { useCartContext } from "../contexts/cart/CartContextProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const HeroList = () => {
  const { getProducts, products, deleteProduct } = useProducts();

  const { isAdmin, user } = useAuth();

  const { isAlreadyInCart, deleteProductFromCart, addProductToCart } =
    useCartContext();

  useEffect(() => {
    getProducts();
  }, []);

  const [expanded] = React.useState(false);
  const [opn, setOpn] = React.useState(0);
  const [cls, setCls] = React.useState(false);

  return (
    <>
      <Box
        sx={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {products.length > 0 ? (
          products.map((card) => (
            <Card
              key={card.id}
              sx={{
                maxWidth: 330,
                width: "30%",
                height: `${+card.id! === +opn! ? "520px" : "400px"}`,
                backgroundColor: "#4B5860",
              }}
            >
              {" "}
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
                {card.title}
              </Typography>
              <Link to={`/hero/${card.id}`}>
                <CardMedia
                  component="img"
                  sx={{ height: 220 }}
                  image={card.image}
                  title={card.title}
                  alt={card.title}
                />
              </Link>
              <CardActions disableSpacing>
                <IconButton aria-label="share" sx={{ color: "#fff" }}>
                  {user && (
                    <div>
                      {isAlreadyInCart(+card.id!) ? (
                        <div onClick={() => deleteProductFromCart(+card.id!)}>
                          <RemoveShoppingCartIcon color="error" />
                        </div>
                      ) : (
                        <div onClick={() => addProductToCart(card)}>
                          <AddShoppingCartIcon />
                        </div>
                      )}
                    </div>
                  )}
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={() => {
                    if (!cls) {
                      setOpn(+card.id!);
                      setCls(true);
                    } else {
                      setOpn(0);
                      setCls(false);
                    }
                  }}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse
                in={+opn! === +card.id! ? true : false}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Georgia, serif",
                      display: "flex",
                      gap: "3px",
                      color: "#fff",
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    Price: {card.price}
                    <Avatar
                      alt="$"
                      src="https://i.kym-cdn.com/photos/images/newsfeed/001/293/154/305.png"
                      sx={{ width: 30, height: 30 }}
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Georgia, serif",
                      color: "#fff",
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    Category: {card.category}
                  </Typography>
                </CardContent>
              </Collapse>
              {isAdmin() && (
                <CardActions sx={{ justifyContent: "space-evenly" }}>
                  <Link to={`/edit/${card.id}`}>
                    <Button variant="contained" color="info">
                      Update
                    </Button>
                  </Link>
                  <Button
                    onClick={() => deleteProduct(card.id!)}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </CardActions>
              )}
            </Card>
          ))
        ) : (
          <ClipLoader color="#fff" size={"50"} />
        )}
      </Box>
    </>
  );
};

export default HeroList;

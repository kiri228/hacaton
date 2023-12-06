import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useCartContext } from "../contexts/cart/CartContextProvider";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import BackVideo from "../components/back/BackVideo";
const CartPage = () => {
  const { cart, deleteProductFromCart, getCart, decreaseCount, increaseCount } =
    useCartContext();

  useEffect(() => getCart(), []);

  if (cart.products.length < 1) {
    return (
      <>
        <BackVideo />
        <Box
          sx={{
            width: "fit-content",
            margin: "150px auto",
            textAlign: "center",
          }}
        >
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "700" }}>
            Cart is empty
          </Typography>
          <Button
            component={Link}
            to="/"
            sx={{ color: "#1976D2", fontWeight: "700", fontSize: "20px" }}
          >
            Go to products
          </Button>
        </Box>
      </>
    );
  }

  return (
    <>
      <BackVideo />
      <TableContainer
        component={Paper}
        sx={{
          width: "60%",
          margin: "auto",
          marginTop: "10px",
          backgroundColor: "#4B5860",
          color: "#fff",
        }}
      >
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                color: "#fff",
                fontFamily: "Georgia, serif",
                fontSize: "20px",
              }}
            >
              <TableCell
                sx={{
                  color: "#fff",
                  fontFamily: "Georgia, serif",
                  fontSize: "20px",
                }}
              >
                Title
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#fff",
                  fontFamily: "Georgia, serif",
                  fontSize: "20px",
                }}
              >
                Image
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#fff",
                  fontFamily: "Georgia, serif",
                  fontSize: "20px",
                }}
              >
                Category
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#fff",
                  fontFamily: "Georgia, serif",
                  fontSize: "20px",
                }}
              >
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "#fff",
                    fontFamily: "Georgia, serif",
                    fontSize: "20px",
                  }}
                >
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  <img width={300} src={row.img} />
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#fff",
                    fontFamily: "Georgia, serif",
                    fontSize: "20px",
                  }}
                >
                  {row.category}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#fff",
                    fontFamily: "Georgia, serif",
                    fontSize: "20px",
                  }}
                >
                  {row.price}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      if (row.count <= 1) {
                        deleteProductFromCart(+row.id!);
                      } else {
                        decreaseCount(+row.id!);
                      }
                    }}
                  >
                    <RemoveIcon sx={{ color: "#fff" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3px",
            }}
          >
            Total price: {cart.totalPrice}{" "}
            <Avatar
              alt="$"
              src="https://i.kym-cdn.com/photos/images/newsfeed/001/293/154/305.png"
              sx={{ width: 30, height: 30 }}
            />
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/success"
            sx={{
              margin: "10px",
            }}
          >
            Order
          </Button>
        </Box>
      </TableContainer>
    </>
  );
};

export default CartPage;

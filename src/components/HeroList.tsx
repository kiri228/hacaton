import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { CircleLoader } from "react-spinners";
import { useProducts } from "../contexts/hero/HeroContextProvider";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PaginationOutlined from "../components/Pagination";
import { useAuth } from "../contexts/auth/AuthContextsProvider";
import { useCartContext } from "../contexts/cart/CartContextProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        marginTop: "20px",
        width: "90%",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {products.length > 0 ? (
        products.map((card) => (
          <Card key={card.id} sx={{ maxWidth: 345, width: "30%" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              sx={{ height: 140 }}
              image={card.image}
              title="green iguana"
              alt="Paella dish"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Price: {card.price} $
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Category: {card.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
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
            {isAdmin() && (
              <CardActions>
                <Link to={`/edit/${card.id}`}>
                  <Button variant="contained" color="info" size="small">
                    Update
                  </Button>
                </Link>
                <Button
                  onClick={() => deleteProduct(card.id!)}
                  variant="contained"
                  color="error"
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
            )}
          </Card>
        ))
      ) : (
        <CircleLoader color="#36d7b7" />
      )}
    </Box>
  );
};

export default HeroList;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth/AuthContextsProvider";
import LiveSearch from "./LiveSearch";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import style from "./item.module.css";

const pages = [{ title: "Products", link: "/", id: 1 }];

const adminPages = [{ title: "Add", link: "/add", id: 2 }];

const settings = [
  {
    title: "Register",
    link: "/register",
    id: 1,
  },
  {
    title: "Login",
    link: "/login",
    id: 2,
  },
  {
    title: "Logout",
    id: 3,
  },
];

function Navbar() {
  const { logout, user, isAdmin, login } = useAuth();

  function getPages() {
    if (isAdmin()) {
      return pages.concat(adminPages);
    } else {
      return pages;
    }
  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", border: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/?_page=1&_limit=3">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png"
                className={style.logo}
              />
            </Link>
            <Box

              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", textDecoration: "none" },
              }}
            >
              {getPages().map((page) => (
                <Link key={page.id} to={page.link}>
                  <Button
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      fontSize: "20px",
                      fontFamily: "serif",
                      color: "#fff",
                    }}
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Box>
            {user && (
              <Link to="/cart">
                <LocalMallIcon
                  sx={{
                    marginRight: "10px",
                    color: "#fff",
                    fontSize: "30px",

                  }}
                />
              </Link>
            )}
            <LiveSearch />
            <Box sx={{ flexGrow: 0 }}>
              <span
                style={{
                  marginRight: "2rem",
                  margin: "0 20px",
                  fontFamily: "serif",
                  fontSize: "20px",
                }}
              >{`${user ? user.displayName : "No user"}`}</span>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={`${
                      user ? user.photoURL : "/static/images/avatar/2.jpg"
                    }`}
                    sx={{ width: 70, height: 70 }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ margin: "70px 0 0 0" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <div key={setting.id}>
                    {!setting.link ? (
                      <MenuItem
                        key={setting.id}
                        onClick={() => {
                          handleCloseUserMenu();
                          logout();
                        }}
                      >

                        <Typography textAlign="center">
                          {setting.title}
                        </Typography>
                      </MenuItem>
                    ) : (
                      <Link to={setting.link}>
                        <MenuItem
                          key={setting.id}
                          onClick={handleCloseUserMenu}
                        >
                          <Typography textAlign="center">
                            {setting.title}
                          </Typography>
                        </MenuItem>
                      </Link>
                    )}
                  </div>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;

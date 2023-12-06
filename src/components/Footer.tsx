import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import style from "./item.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const handleValveLogoClick = () => {
    window.location.href = "https://www.valvesoftware.com/en/about";
  };
  return (
    <>
      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "20px 0",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0 0 0 ",
        }}
      >
        <div className={style.item}>
          <div onClick={handleValveLogoClick} style={{ cursor: "pointer" }}>
            <img
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
              alt="Valve Logo"
              style={{ width: "120px", height: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png"
              alt="Dota 2 Logo"
              style={{ width: "256px", height: "auto" }}
            />
          </div>
        </div>
        <Typography
          variant="body2"
          align="center"
          style={{
            margin: "1px auto",
            fontFamily: "Reaver, serif",
            fontSize: "16px",
          }}
        >
          Dota and the Dota logo are trademarks and/or registered trademarks of
          Valve Corporation.
          <br />
          2023 Valve Corporation, all rights reserved.
        </Typography>
      </footer>
    </>
  );
};

export default Footer;

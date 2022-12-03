import React from "react";
import { Box } from "@chakra-ui/react";
import traya from "../assets/trayalogo.png";
// import { Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import Button from "@mui/material/Button";

function NavBar() {
  return (
    <div>
      <Box
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        bg="#B7D341"
        w="100%"
        p={2}
        color="white"
      >
        <div style={{ margin: "8px 0.8rem" }}>
          <img src={traya} alt="" />
        </div>
        <Button
          href="https://traya.health/"
          style={{
            margin: "auto 25px",
            color: "gray",
            border: "2px solid gray",
          }}
          variant="ouline"
        >
          Main Page
        </Button>
      </Box>
    </div>
  );
}

export default NavBar;

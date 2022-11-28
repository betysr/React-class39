import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to={`/`}>
        <Button variant="contained" style={{ float: "right" }}>
          Product List
        </Button>
      </Link>
      <Link to={`/favorite`}>
        <Button variant="contained" style={{ float: "right" }}>
          Favorite Products
        </Button>
      </Link>
    </div>
  );
}

export default Navigation;

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function Navbar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" noWrap>
            Trello
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

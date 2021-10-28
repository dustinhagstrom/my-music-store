import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Box p={4} sx={{ flexGrow: "1" }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;

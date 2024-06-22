import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Container from "@mui/material/Container";
import Planner from "./components/layout/Planner";


export default function SlimeRancher2Planner() {
  const [mode, setMode] = React.useState("light");
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Box
          component="header"
          sx={{
            position: "fixed",
            top: 0,
            width:'100%',
            height:'50px',
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
          }}
        >
          <Header mode={mode} toggleColorMode={toggleColorMode} />
        </Box>

        <Container component="main" sx={{ mt: 4, mb: 2, pt:'50px', pb:'85px'}} >
          <Planner />
        </Container>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            position: "fixed",
            bottom: 0,
            width:'100%',
            height:'85px',
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
          }}
        >
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Container from "@mui/material/Container";
import Planner from "./components/layout/Planner";
import FavFoods from "./components/util/FavFoods";
import Divider from "@mui/material/Divider";

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
          sx={{
            position: "fixed",
            top: 0,
            width: "100%",
            height: "50px",
            zIndex: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
          }}
        >
          <Header mode={mode} toggleColorMode={toggleColorMode} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            minHeight: "100vh",
          }}
        >
          <Container
            sx={{
              pt: "60px",
              pb: "85px",
              pl: "0px",
              pr:"0px",
              margin: 0,
              maxHeight: "100%",
                flexGrow:0,
              alignItems: "center",
              width: "auto"
            }}
          >
      <img src={require(`./mapOverview.png`)} alt="Slime Rancher 2 Conservatory map" height="790px"></img>
          </Container>
          <Divider orientation="vertical" flexItem />
          <Container
            sx={{
              pt: "60px",
              pb: "85px",
              pl: "10px",
              pr: "10px",
              margin: 0,
              flexGrow: 1,
              maxWidth: "100%",
              maxHeight: "100%",
              alignItems: "center",
            }}
          >
            <Planner />
          </Container>
          <Divider orientation="vertical" flexItem />
          <Container
width="50px"
            sx={{ pt: "60px", pb: "85px", pl: "10px", pr: "10px", margin: 0, width: "150px" }}
          >

                        <FavFoods />
                      </Container>
        </Box>

        <Box
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            position: "fixed",
            bottom: 0,
            width: "100%",
            height: "85px",
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

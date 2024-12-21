import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AnnouncementIcon from "@mui/icons-material/Announcement";

export default function Footer() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row" },
          width: "100%",
          alignItems: "center",
        }}
      >
        <AnnouncementIcon />
        <br />
        <Typography variant="body2" fontWeight={600} paddingLeft={1}>
          PLEASE BE AWARE THAT THIS PROJECT IS A WORK IN PROGRESS IN ITS VERY EARLY STAGES!
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary" mb={1} paddingTop={1}>
        That means that a lot of features are still mising, like any sort of data saving
        functionality. Make sure to take a screenshot of your plan before you leave or reload this
        site!
      </Typography>
    </Container>
  );
}

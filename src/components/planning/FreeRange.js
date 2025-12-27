import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import { freeRangeTypes } from "./types.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FreeRange({ plot, savedPlan, onPlanUpdate }) {
  const [open, setOpen] = useState(false);
  const [chosenContent1, setChosenContent1] = useState([]);
  const [chosenContent2, setChosenContent2] = useState([]);

  // Load saved plan when component mounts or savedPlan changes
  useEffect(() => {
    if (savedPlan) {
      setChosenContent1(savedPlan.content1 || []);
      setChosenContent2(savedPlan.content2 || []);
    }
  }, [savedPlan]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeContent1 = (event) => {
    const newContent1 = event.target.value;
    setChosenContent1(newContent1);
    updatePlan(newContent1, chosenContent2);
  };

  const handleChangeContent2 = (event) => {
    const newContent2 = event.target.value;
    setChosenContent2(newContent2);
    updatePlan(chosenContent1, newContent2);
  };

  const updatePlan = (content1, content2) => {
    // Only save if there's actual content
    if (
      (content1.name && content1.name !== "None") ||
      (content2.name && content2.name !== "None")
    ) {
      const planData = {
        content1,
        content2,
        lastUpdated: new Date().toISOString(),
      };
      onPlanUpdate(planData);
    } else {
      onPlanUpdate(null);
    }
  };

  let plotText = "Free Range";

  let plotContentImages = <div />;

  if (
    chosenContent1.name !== undefined &&
    chosenContent2.name !== undefined &&
    chosenContent1.name !== "" &&
    chosenContent2.name !== "" &&
    chosenContent1.name !== "None" &&
    chosenContent2.name !== "None"
  ) {
    plotContentImages = (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CardMedia
          component="img"
          alt={chosenContent1.name}
          sx={{ padding: "0", width: "25px", objectFit: "contain" }}
          image={require(`../../../public/images/${chosenContent1.image}`)}
        />
        <CardMedia
          component="img"
          alt={chosenContent2.name}
          sx={{ padding: "0", width: "25px", objectFit: "contain" }}
          image={require(`../../../public/images/${chosenContent2.image}`)}
        />
      </Box>
    );
  } else if (
    chosenContent1.name !== undefined &&
    chosenContent1.name !== "" &&
    chosenContent1.name !== "None"
  ) {
    plotContentImages = (
      <CardMedia
        component="img"
        alt={chosenContent1.name}
        sx={{ padding: "0", width: "35px", objectFit: "contain" }}
        image={require(`../../../public/images/${chosenContent1.image}`)}
      />
    );
  } else if (
    chosenContent2.name !== undefined &&
    chosenContent2.name !== "" &&
    chosenContent2.name !== "None"
  ) {
    plotContentImages = (
      <CardMedia
        component="img"
        alt={chosenContent2.name}
        sx={{ padding: "0", width: "35px", objectFit: "contain" }}
        image={require(`../../../public/images/${chosenContent2.image}`)}
      />
    );
  } else {
    plotContentImages = (
      <div>
        <Typography
          variant="body1"
          align="center"
          sx={{
            paddingBottom: "3px",
            fontSize: "0.75rem",
          }}
        >
          {plotText}
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <Card
        sx={{
          height: "50px",
          width: "50px",
          position: "absolute",
          left: plot.left,
          top: plot.top,
          background: "rgba(128, 220, 220, 1)",
        }}
      >
        <CardActionArea
          onClick={handleOpen}
          sx={{
            height: "50px",
            width: "50px",
          }}
        >
          <CardContent
            sx={{
              height: "50px",
              width: "50px",
              display: "flex",
              flexDirection: "column",
              padding: "0px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {plotContentImages}
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Stack spacing={2} sx={style}>
          <Typography>Plan {plot.plotName}</Typography>
          <FormControl fullWidth>
            <Select
              displayEmpty
              value={chosenContent1}
              onChange={handleChangeContent1}
              input={<Input />}
              MenuProps={MenuProps}
            >
              <MenuItem value="">
                <em>Plot Content 1</em>
              </MenuItem>
              {freeRangeTypes.map((content) => (
                <MenuItem key={content.name} value={content}>
                  {content.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <Select
              displayEmpty
              value={chosenContent2}
              onChange={handleChangeContent2}
              input={<Input />}
              MenuProps={MenuProps}
            >
              <MenuItem value="">
                <em>Plot Content 2</em>
              </MenuItem>
              {freeRangeTypes.map((content) => (
                <MenuItem key={content.name} value={content}>
                  {content.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Modal>
    </div>
  );
}

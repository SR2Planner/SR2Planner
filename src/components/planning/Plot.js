import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  plotTypes,
  corralSlimeTypes,
  coopTypes,
  fruitTypes,
  veggieTypes,
  incineratorSlimeTypes,
  pondSlimeTypes,
} from "./types";

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

// Helper function to get content options based on plot type
const getContentOptions = (plotTypeName) => {
  switch (plotTypeName) {
    case "Corral":
      return corralSlimeTypes;
    case "Coop":
      return coopTypes;
    case "Fruit Tree":
      return fruitTypes;
    case "Veggie Patch":
      return veggieTypes;
    case "Pond":
      return pondSlimeTypes;
    case "Incinerator":
      return incineratorSlimeTypes;
    case "Silo":
      return [{ name: "Storage", image: "placeholder.png" }];
    case "Empty":
    default:
      return [{ name: "None", image: "placeholder.png" }];
  }
};

export default function Plot({ plot, savedPlan, onPlanUpdate }) {
  const [open, setOpen] = useState(false);
  const [chosenPlotType, setChosenPlotType] = useState("");
  const [chosenContent1, setChosenContent1] = useState("");
  const [chosenContent2, setChosenContent2] = useState("");
  const [contentOptions, setContentOptions] = useState([]);

  // Load saved plan when component mounts or savedPlan changes
  useEffect(() => {
    if (savedPlan) {
      setChosenPlotType(savedPlan.plotType || "");
      setChosenContent1(savedPlan.content1 || "");
      setChosenContent2(savedPlan.content2 || "");

      if (savedPlan.plotType) {
        setContentOptions(getContentOptions(savedPlan.plotType.name));
      }
    }
  }, [savedPlan]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePlotType = (event) => {
    const newPlotType = event.target.value;
    setChosenPlotType(newPlotType);

    const newContentOptions = getContentOptions(newPlotType.name);
    setContentOptions(newContentOptions);

    // Reset content selections when plot type changes
    setChosenContent1("");
    setChosenContent2("");

    // Update the plan
    updatePlan(newPlotType, "", "");
  };

  const handleChangeContent1 = (event) => {
    const newContent1 = event.target.value;
    setChosenContent1(newContent1);
    updatePlan(chosenPlotType, newContent1, chosenContent2);
  };

  const handleChangeContent2 = (event) => {
    const newContent2 = event.target.value;
    setChosenContent2(newContent2);
    updatePlan(chosenPlotType, chosenContent1, newContent2);
  };

  const updatePlan = (plotType, content1, content2) => {
    const planData = {
      plotType,
      content1,
      content2,
      lastUpdated: new Date().toISOString(),
    };
    onPlanUpdate(planData);
  };

  const clearPlot = () => {
    setChosenPlotType("");
    setChosenContent1("");
    setChosenContent2("");
    setContentOptions([]);
    onPlanUpdate(null);
  };

  // Render plot content images
  const renderPlotContentImages = () => {
    if (!chosenPlotType.name || chosenPlotType.name === "Empty") {
      return <div />;
    }

    const hasContent1 = chosenContent1.name && chosenContent1.name !== "None";
    const hasContent2 = chosenContent2.name && chosenContent2.name !== "None";

    if (hasContent1 && hasContent2) {
      return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
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
    } else if (hasContent1) {
      return (
        <CardMedia
          component="img"
          alt={chosenContent1.name}
          sx={{ padding: "0", width: "35px", objectFit: "contain" }}
          image={require(`../../../public/images/${chosenContent1.image}`)}
        />
      );
    } else if (hasContent2) {
      return (
        <CardMedia
          component="img"
          alt={chosenContent2.name}
          sx={{ padding: "0", width: "35px", objectFit: "contain" }}
          image={require(`../../../public/images/${chosenContent2.image}`)}
        />
      );
    } else if (chosenPlotType.name) {
      return (
        <CardMedia
          component="img"
          alt={chosenPlotType.name}
          sx={{ padding: "0", width: "35px", objectFit: "contain" }}
          image={require(`../../../public/images/${chosenPlotType.image}`)}
        />
      );
    }

    return <div />;
  };

  const showContent2Select =
    chosenPlotType.name === "Corral" || chosenPlotType.name === "Coop";
  const showContentSelects =
    chosenPlotType.name &&
    chosenPlotType.name !== "" &&
    chosenPlotType.name !== "Empty" &&
    chosenPlotType.name !== "Silo";

  return (
    <div>
      <Card
        sx={{
          height: "50px",
          width: "50px",
          position: "absolute",
          left: plot.left,
          top: plot.top,
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
            {renderPlotContentImages()}
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="plot-configuration-modal"
        aria-describedby="configure-plot-content"
      >
        <Stack spacing={2} sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Configure Plot</h3>
            {savedPlan && (
              <Button size="small" color="error" onClick={clearPlot}>
                Clear
              </Button>
            )}
          </Box>

          <FormControl fullWidth>
            <Select
              displayEmpty
              id="choose-plot-type-name"
              value={chosenPlotType}
              onChange={handleChangePlotType}
              input={<Input />}
              MenuProps={MenuProps}
            >
              <MenuItem value="">
                <em>Plot Type</em>
              </MenuItem>
              {plotTypes.map((plotType) => (
                <MenuItem key={plotType.name} value={plotType}>
                  {plotType.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {showContentSelects && (
            <>
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
                  {contentOptions.map((content) => (
                    <MenuItem key={content.name} value={content}>
                      {content.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {showContent2Select && (
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
                    {contentOptions.map((content) => (
                      <MenuItem key={content.name} value={content}>
                        {content.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </>
          )}
        </Stack>
      </Modal>
    </div>
  );
}

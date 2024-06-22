import React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

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

const plotTypes = [
  "Corral",
  "Coop",
  "Fruit Garden",
  "Veggie Garden",
  "Incinerator",
  "Pond",
  "Silo",
  "Empty",
];
const corralSlimeTypes = [
  "Angler Slime",
  "Batty Slime",
  "Boom Slime",
  "Cotton Slime",
  "Crystal Slime",
  "Dervish Slime",
  "Flutter Slime",
  "Honey Slime",
  "Hunter Slime",
  "Phosphor Slime",
  "Pink Slime",
  "Ringtail Slime",
  "Rock Slime",
  "Saber Slime",
  "Tabby Slime",
  "Yolky Slime",
  "None",
];
const coopTypes = [
  "Briar Hen",
  "Hen Hen",
  "Painted Hen",
  "Sea Hen",
  "Stony Hen",
  "Thundercluck",
  "Mixed Hens",
  "Yolky Slime",
  "None",
];
const fruitTypes = ["Cuberry", "Mint Mango", "Pogofruit", "Pomegranite", "Prickle Pear", "None"];
const veggieTypes = ["Carrot", "Heart Bear", "Odd Onion", "Water Lettuce", "None"];
const incineratorSlimeTypes = ["Fire", "None"];
const pondSlimeTypes = ["Puddle", "None"];

export default function Plot({ plotName }) {
  const [open, setOpen] = React.useState(false);
  const [chosenPlotType, setChosenPlotType] = React.useState([]);
  const [chosenContent1, setChosenContent1] = React.useState([]);
  const [chosenContent2, setChosenContent2] = React.useState([]);
  const [contentOptions, setContentOptions] = React.useState(["Choose Plot Type"]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePlotType = (event) => {
    setChosenPlotType(event.target.value);
    switch (event.target.value) {
      case "Corral":
        setContentOptions(corralSlimeTypes);
        break;
      case "Coop":
        setContentOptions(coopTypes);
        break;
      case "Fruit Garden":
        setContentOptions(fruitTypes);
        break;
      case "Veggie Garden":
        setContentOptions(veggieTypes);
        break;
      case "Pond":
        setContentOptions(pondSlimeTypes);
        break;
      case "Incinerator":
        setContentOptions(incineratorSlimeTypes);
        break;
      case "Silo":
        setContentOptions(["Nothing to choose"]);
        break;
      case "Empty":
      default:
        setContentOptions(["Choose other Type"]);
    }
  };

  const handleChangeContent1 = (event) => {
    setChosenContent1(event.target.value);
  };

  const handleChangeContent2 = (event) => {
    setChosenContent2(event.target.value);
  };

  let buttonText = "";
  if (chosenPlotType != "") {
    if (
      chosenContent1 != "" &&
      chosenContent2 != "" &&
      chosenContent1 != "None" &&
      chosenContent2 != "None"
    ) {
      buttonText = `${chosenPlotType} with ${chosenContent1} and ${chosenContent2}`;
    } else if (chosenContent1 == "" && chosenContent2 == "") {
      buttonText = `${chosenPlotType}`;
    } else if (chosenContent1 == "" && chosenContent1 != "None") {
      buttonText = `${chosenPlotType} with ${chosenContent2}`;
    } else if (chosenContent2 == "" && chosenContent2 != "None") {
      buttonText = `${chosenPlotType} with ${chosenContent1}`;
    } else {
      buttonText = "";
    }
  }

  return (
    <div>
      <Card>
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <Typography variant="body2" fontWeight={600}>
              {plotName}
            </Typography>
            <Typography variant="body2">{buttonText}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box sx={style}>
          <Typography>Plan {plotName}</Typography>
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
              {plotTypes.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
              {contentOptions.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
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
              {contentOptions.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}

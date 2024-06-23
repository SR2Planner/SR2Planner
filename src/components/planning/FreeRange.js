import React from "react";
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

const plotTypes = ["Empty", "Slimes", "Hens", "Fruit", "Veggies", "Mixed"];
const corralSlimeTypes = [
  { name: "Angler Slime", image: "slimes/angler.png" },
  { name: "Batty Slime", image: "slimes/batty.png" },
  { name: "Boom Slime", image: "slimes/boom.png" },
  { name: "Cotton Slime", image: "slimes/cotton.png" },
  { name: "Crystal Slime", image: "slimes/crystal.png" },
  { name: "Dervish Slime", image: "slimes/dervish.png" },
  { name: "Flutter Slime", image: "slimes/flutter.png" },
  { name: "Honey Slime", image: "slimes/honey.png" },
  { name: "Hunter Slime", image: "slimes/hunter.png" },
  { name: "Phosphor Slime", image: "slimes/phosphor.png" },
  { name: "Pink Slime", image: "slimes/pink.png" },
  { name: "Ringtail Slime", image: "slimes/ringtail.png" },
  { name: "Rock Slime", image: "slimes/rock.png" },
  { name: "Saber Slime", image: "slimes/saber.png" },
  { name: "Tabby Slime", image: "slimes/tabby.png" },
  { name: "Yolky Slime", image: "slimes/yolky.png" },
  { name: "None", image: "placeholder.png" },
];
const coopTypes = [
  { name: "Briar Hen", image: "meats/briarHen.png" },
  { name: "Hen Hen", image: "meast/henHen.png" },
  { name: "Painted Hen", image: "meats/paintedHen.png" },
  { name: "Sea Hen", image: "meast/seaHen.png" },
  { name: "Stony Hen", image: "meats/stonyHen.png" },
  { name: "Thundercluck", image: "meats/Thundercluck.png" },
  { name: "Mixed Meats", image: "meats/mixedMeats.png" },
  { name: "None", image: "placeholder.png" },
];
const fruitTypes = [
  { name: "Cuberry", image: "fruits/cuberry.png" },
  { name: "Mint Mango", image: "fruits/mintMango.png" },
  { name: "Pogofruit", image: "fruits/pogofruit.png" },
  { name: "Pomegranite", image: "fruits/pomegranite.png" },
  { name: "Prickle Pear", image: "fruits/pricklePear.png" },
  { name: "Mixed Fruits", image: "placeholder.png" },
  { name: "None", image: "placeholder.png" },
];
const veggieTypes = [
  { name: "Carrot", image: "veggies/carrot.png" },
  { name: "Heart Beat", image: "veggies/heartBeat.png" },
  { name: "Odd Onion", image: "veggies/oddOnion.png" },
  { name: "Water Lettuce", image: "veggies/waterLettuce.png" },
  { name: "Mixed Veggies", image: "placeholder.png" },

  { name: "None", image: "placeholder.png" },
];
export default function FreeRangePlanner({ plotName }) {
  const [open, setOpen] = React.useState(false);
  const [chosenPlotType, setChosenPlotType] = React.useState([]);
  const [chosenContent1, setChosenContent1] = React.useState([]);
  const [chosenContent2, setChosenContent2] = React.useState([]);
  const [contentOptions, setContentOptions] = React.useState(["Choose Type"]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePlotType = (event) => {
    setChosenPlotType(event.target.value);
    switch (event.target.value) {
      case "Slimes":
        setContentOptions(corralSlimeTypes);
        break;
      case "Hens":
        setContentOptions(coopTypes);
        break;
      case "Fruit":
        setContentOptions(fruitTypes);
        break;
      case "Veggies":
        setContentOptions(veggieTypes);
        break;
      case "Mixed":
        setContentOptions(
          corralSlimeTypes.concat(coopTypes).concat(fruitTypes).concat(veggieTypes)
        );
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

  let plotText = "";
  let plotContentImages = <div />;

  if (chosenPlotType != "" && chosenPlotType != "Empty") {
    plotText = ` - ${chosenPlotType}`;
  } else {
    plotText = "";
  }

  if (chosenPlotType != "" && chosenPlotType != "Empty") {
    if (
      chosenContent1.name !== undefined &&
      chosenContent2.name !== undefined &&
      chosenContent1.name != "" &&
      chosenContent2.name != "" &&
      chosenContent1.name != "None" &&
      chosenContent2.name != "None"
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
            height="40"
            width="40"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            image={require(`../../../public/images/${chosenContent1.image}`)}
          />
          <CardMedia
            component="img"
            alt={chosenContent2.name}
            height="40"
            width="40"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            image={require(`../../../public/images/${chosenContent2.image}`)}
          />
        </Box>
      );
    } else if (
      chosenContent1.name !== undefined &&
      chosenContent1.name != "" &&
      chosenContent1.name != "None"
    ) {
      plotContentImages = (
        <CardMedia
          component="img"
          alt={chosenContent1.name}
          height="40"
          width="40"
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          image={require(`../../../public/images/${chosenContent1.image}`)}
        />
      );
    } else if (
      chosenContent2.name !== undefined &&
      chosenContent2.name != "" &&
      chosenContent2.name != "None"
    ) {
      plotContentImages = (
        <CardMedia
          component="img"
          alt={chosenContent2.name}
          height="40"
          width="40"
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          image={require(`../../../public/images/${chosenContent2.image}`)}
        />
      );
    } else {
      plotContentImages = <div />;
    }
  } else {
    plotContentImages = <div />;
  }

  return (
    <div>
      <Card>
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <Typography variant="body2" fontWeight={600}>
              {plotName}
              {plotText}
            </Typography>
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
        <Box sx={style}>
          <Typography>Plan {plotName}</Typography>
          <FormControl fullWidth>
            <Select
              displayEmpty
              id="choose-type-name"
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
              {contentOptions.map((content) => (
                <MenuItem key={content} value={content}>
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
              {contentOptions.map((content) => (
                <MenuItem key={content} value={content}>
                  {content.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}

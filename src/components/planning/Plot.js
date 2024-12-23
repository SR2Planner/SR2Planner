import React from "react";
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
  { name: "Corral", image: "plots/corral.png" },
  { name: "Coop", image: "plots/coop.png" },
  { name: "Fruit Tree", image: "plots/garden.png" },
  { name: "Veggie Patch", image: "plots/garden.png" },
  { name: "Incinerator", image: "plots/incinerator.png" },
  { name: "Pond", image: "plots/pond.png" },
  { name: "Silo", image: "plots/silo.png" },
  { name: "Empty", image: "placeholder.png" },
];
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
  { name: "Sloomber Slime", image: "slimes/sloomber.png" },
  { name: "Tabby Slime", image: "slimes/tabby.png" },
  { name: "Tangle Slime", image: "slimes/tangle.png" },
  { name: "Twin Slime", image: "slimes/twin.png" },
  { name: "Yolky Slime", image: "slimes/yolky.png" },
  { name: "None", image: "placeholder.png" },
];
const coopTypes = [
  { name: "Briar Hen", image: "meats/briarHen.png" },
  { name: "Candied Hen", image: "meats/candiedHen.png" },
  { name: "Hen Hen", image: "meats/henHen.png" },
  { name: "Painted Hen", image: "meats/paintedHen.png" },
  { name: "Sea Hen", image: "meats/seaHen.png" },
  { name: "Stony Hen", image: "meats/stonyHen.png" },
  { name: "Thundercluck", image: "meats/thundercluck.png" },
  { name: "Mixed Meats", image: "meats/mixedMeats.png" },
  { name: "Yolky Slime", image: "slimes/yolky.png" },
  { name: "None", image: "placeholder.png" },
];
const fruitTypes = [
  { name: "Cuberry", image: "fruits/cuberry.png" },
  { name: "Mint Mango", image: "fruits/mintMango.png" },
  { name: "Pogofruit", image: "fruits/pogofruit.png" },
  { name: "Pomegranite", image: "fruits/pomegranite.png" },
  { name: "Polaricherry", image: "fruits/polaricherry.png" },
  { name: "Prickle Pear", image: "fruits/pricklePear.png" },
  { name: "None", image: "placeholder.png" },
];
const veggieTypes = [
  { name: "Carrot", image: "veggies/carrot.png" },
  { name: "Heart Beat", image: "veggies/heartBeat.png" },
  { name: "Odd Onion", image: "veggies/oddOnion.png" },
  { name: "Water Lettuce", image: "veggies/waterLettuce.png" },
  { name: "None", image: "placeholder.png" },
];
const incineratorSlimeTypes = [
  { name: "Fire", image: "slimes/fire.png" },
  { name: "None", image: "placeholder.png" },
];
const pondSlimeTypes = [
  { name: "Puddle", image: "slimes/puddle.png" },
  { name: "None", image: "placeholder.png" },
];

export default function Plot({ plot }) {
  const [open, setOpen] = React.useState(false);
  const [chosenPlotType, setChosenPlotType] = React.useState("");
  const [chosenContent1, setChosenContent1] = React.useState("");
  const [chosenContent2, setChosenContent2] = React.useState("");
  const [contentOptions, setContentOptions] = React.useState(["Choose Plot Type"]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePlotType = (event) => {
    setChosenPlotType(event.target.value);
    switch (event.target.value.name) {
      case "Corral":
        setContentOptions(corralSlimeTypes);
        break;
      case "Coop":
        setContentOptions(coopTypes);
        break;
      case "Fruit Tree":
        setContentOptions(fruitTypes);
        break;
      case "Veggie Patch":
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

  let plotContentImages = <div />;

  if (
    chosenPlotType.name !== undefined &&
    chosenPlotType.name !== "" &&
    chosenPlotType.name !== "Empty"
  ) {
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
    } else if (
      chosenPlotType.name !== undefined &&
      (chosenContent1.name === undefined ||
        chosenContent1.name === "" ||
        chosenContent1.name === "None") &&
      (chosenContent2.name === undefined ||
        chosenContent2.name === "" ||
        chosenContent2.name === "None")
    ) {
      plotContentImages = (
        <CardMedia
          component="img"
          alt={chosenPlotType.name}
          sx={{ padding: "0", width: "35px", objectFit: "contain" }}
          image={require(`../../../public/images/${chosenPlotType.image}`)}
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
          {chosenPlotType.name !== undefined &&
            chosenPlotType.name !== "" &&
            chosenPlotType.name !== "Empty" &&
            chosenPlotType.name !== "Silo" && (
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
                {(chosenPlotType.name === "Corral" || chosenPlotType.name === "Coop") && (
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

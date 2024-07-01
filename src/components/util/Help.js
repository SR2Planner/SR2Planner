import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Help() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="text.secondary" variant="body2" gutterBottom onClick={handleOpen}>
        Need Help?
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box sx={style}>
          <Typography variant="body2" fontWeight={600} gutterBottom paddingLeft={1}>
            PLEASE BE AWARE THAT THIS PROJECT IS A WORK IN PROGRESS IN ITS VERY EARLY STAGES!
          </Typography>
          <Divider />
          <br />
          <Typography>
            There are a lot of features still missing, that I am planning to add whenever I find the
            time to do so, like e.g. better visuals, being able to export and import your plan, ...
          </Typography>
          <br />
          <Typography>
            If you noticed a bug, have a feature request, or have just a general question, please{" "}
            <Link href="https://github.com/SR2Planner/SR2Planner/issues/new?assignees=SR2Planner&labels=new&projects=SR2Planner%2F1&template=HELP_REQUEST.yml&title=Help+Request%3A+">
              open a help request here
            </Link>
            .
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

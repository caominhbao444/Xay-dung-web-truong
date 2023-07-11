import React from "react";
import "./Dialog.scss";
import { Box, Button, Dialog, DialogTitle } from "@mui/material";
const DialogComponent = ({ props }) => {
  const [open, setOpen] = React.useState(props.open);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={{ backgroundColor: "#a2b3c3" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <span style={{ fontWeight: "bold", color: "white" }}>
            Tạo bài viết
          </span>
          <ion-icon
            name="close-circle-outline"
            onClick={handleClose}
            style={{
              cursor: "pointer",
              width: "30px",
              height: "30px",
              display: "block",
              border: "none",
              zIndex: "6",
              fontWeight: "bold",
              color: "white",
            }}
          ></ion-icon>
        </Box>
      </DialogTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          position: "relative",
          padding: "40px",
          maxWidth: "600px",
          height: "400px",
          gap: "10px",
        }}
      >
        <Box
          maxWidth="600px"
          style={{
            display: "flex",
            gap: "10px",
            position: "relative",
          }}
        ></Box>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#a2b3c3",
            borderRadius: "0",
            fontWeight: "bold",
          }}
          fullWidth
        >
          Đăng bài
        </Button>
      </div>
    </Dialog>
  );
};

export default DialogComponent;

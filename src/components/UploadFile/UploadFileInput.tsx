import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { Button, Typography, styled } from "@mui/material";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

type Props = {
  file?: File;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UploadFileInput = ({ handleChange, file }: Props) => {
  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      sx={{
        textTransform: "none",
        borderRadius: "10px",
        height: "50px",
        minWidth: "150px",
      }}
    >
      <Typography variant="h5">Upload file</Typography>
      <VisuallyHiddenInput type="file" onChange={handleChange} />
    </Button>
  );
};

export default UploadFileInput;

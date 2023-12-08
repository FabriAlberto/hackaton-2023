import React, { useState } from "react";
import UploadFileInput from "./UploadFileInput";
import { Grid, Card, Typography, IconButton } from "@mui/material";
import GenerateButton from "../GenerateButton/GenerateButton";
import ClearIcon from "@mui/icons-material/Clear";

type Props = {
  handleExamGenerate: () => void;
};

const UploadFile = ({ handleExamGenerate }: Props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const handleDeletFile = () => {
    setFile(null);
  };

  return (
    <Grid
      container
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card
        sx={{
          borderRadius: "8px",
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={5}
          >
            <Typography fontWeight={500}>Sube un archivo</Typography>

            <UploadFileInput
              file={file || undefined}
              handleChange={handleChangeFile}
            />
          </Grid>
          <Grid
            item
            md={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            {file ? (
              <>
                <Typography>{file.name}</Typography>
                <IconButton onClick={handleDeletFile}>
                  {" "}
                  <ClearIcon />
                </IconButton>
              </>
            ) : (
              <Typography>Aún no se ha cargado ningun archivo</Typography>
            )}
          </Grid>
          <Grid item xs={12} display={"flex"} justifyContent={"center"} mt={10}>
            <GenerateButton disabled={!file} onClick={handleExamGenerate} />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default UploadFile;

import React, { useState } from "react";
import UploadFileInput from "./UploadFileInput";
import { Grid, Card, Typography, IconButton } from "@mui/material";
import GenerateButton from "../GenerateButton/GenerateButton";
import ClearIcon from "@mui/icons-material/Clear";
import { useUtilsContext } from "../../hooks/useUtilsContext";
import clientAxios from "../../services/HttpService/clientAxios";
import { Exam } from "../../types";
import { Response } from "../../services/Models/response";

type Props = {
  nextStepp: () => void;
};

const UploadFile = ({ nextStepp }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const { showSpinner, hideSpinner, handleAddExam } = useUtilsContext();

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const handleDeletFile = () => {
    setFile(null);
  };

  const handleExamGenerate = () => {
    showSpinner();
    let formData = new FormData();
    // video javi
    // formData.append("url", "https://www.youtube.com/watch?v=Vq6h9dphulo");
    // video alvaro
    // formData.append("url", "https://youtu.be/j-jzI3wkkVk");
    // video fabri
    formData.append("url", "https://youtu.be/M2HaMR3H0Cg");
    // video omaly
    // formData.append("url", "https://mv.omaly.io/ocxsa7NgSznrnN5w6");
    // formData.append("file", file as File);
    formData.append("name", "Examen");
    formData.append("numberOfQuestions", "4");
    formData.append("numberOfOptions", "2");
    formData.append("difficulty", "Dificil");
    formData.append("multipleCorrect", "false");
    clientAxios
      .post<Response<Exam>>("/topics/audio", formData)
      .then((res) => {
        handleAddExam(res.data.data as Exam);
      })
      .catch((err) => {
        console.error(err);
        hideSpinner();
      })
      .finally(() => {
        hideSpinner();
        nextStepp();
      });
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
            <GenerateButton onClick={handleExamGenerate} />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default UploadFile;

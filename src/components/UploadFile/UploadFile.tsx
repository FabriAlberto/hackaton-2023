import React, { useState } from "react";
import UploadFileInput from "./UploadFileInput";
import { Grid, Card, Typography, IconButton, TextField } from "@mui/material";
import GenerateButton from "../GenerateButton/GenerateButton";
import ClearIcon from "@mui/icons-material/Clear";
import { useUtilsContext } from "../../hooks/useUtilsContext";
import clientAxios from "../../services/HttpService/clientAxios";
import { Exam } from "../../types";
import { Response } from "../../services/Models/response";
const MOCK_EXAM = {
  examName: "examen",
  numberOfQuestions: 3,
  numberOfOptions: 2,
  difficulty: "Dificil",
  questions: [
    {
      question: "¿Qué es Angular?",
      options: [
        {
          text: "Una plataforma de desarrollo para crear aplicaciones web.",
          correct: true,
        },
        {
          text: "Un lenguaje de programación para crear aplicaciones móviles.",
          correct: false,
        },
      ],
      justification:
        "Angular es una plataforma de desarrollo con la cual podemos crear aplicaciones web del tipo SPA o aplicaciones de página única.",
    },
    {
      question: "¿Cuál es la función de los componentes en Angular?",
      options: [
        {
          text: "Definir la parte visual de una aplicación.",
          correct: true,
        },
        {
          text: "Manejar la lógica de negocio de una aplicación.",
          correct: false,
        },
      ],
      justification:
        "Los componentes en Angular consisten en una plantilla que es la parte visual y una clase que define la parte lógica.",
    },
    {
      question: "¿Qué son los servicios en Angular?",
      options: [
        {
          text: "Clases que centralizan la lógica reutilizable en una aplicación.",
          correct: true,
        },
        {
          text: "Elementos visuales de una aplicación en Angular.",
          correct: false,
        },
      ],
      justification:
        "Los servicios en Angular son clases que podemos inyectar en cualquier otra clase y se utilizan para centralizar la lógica reutilizable en distintos lugares.",
    },
  ],
  multipleCorrect: false,
};
type Props = {
  nextStepp: () => void;
};
const regMatch =
  /^((http|https):\/\/)?(www\.)?[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/[^\s]*)?$/;

const UploadFile = ({ nextStepp }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");
  const { showSpinner, hideSpinner, handleAddExam } = useUtilsContext();

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleDeletFile = () => {
    setFile(null);
  };
  //MOCK FETCH
 /*  const handleExamGenerate=()=>{
    showSpinner();
    setTimeout(()=>{
      handleAddExam(MOCK_EXAM);
      hideSpinner();
      nextStepp();
    },3000)
  } */
  const handleExamGenerate = () => {
    showSpinner();
    let formData = new FormData();
    // video javi
    // formData.append("url", "https://www.youtube.com/watch?v=Vq6h9dphulo");
    // video alvaro
    // formData.append("url", "https://youtu.be/j-jzI3wkkVk");
    // video fabri
    formData.append("url", url);
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
            px={5}
            py={2}
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
          >
            {
              file && (
                <>
                  <Typography>{file.name}</Typography>
                  <IconButton onClick={handleDeletFile}>
                    {" "}
                    <ClearIcon />
                  </IconButton>
                </>
              ) /*  : (
              <Typography>Aún no se ha cargado ningun archivo</Typography>
            ) */
            }
          </Grid>
          <Grid
            item
            md={12}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Typography variant="h3">o </Typography>

            <TextField
              placeholder={"ingresa el link de un video"}
              sx={{ mt: 1 }}
              onChange={handleChangeUrl}
            />
          </Grid>
          <Grid item xs={12} display={"flex"} justifyContent={"center"} mt={10}>
            <GenerateButton
              onClick={handleExamGenerate}
              disabled={!file && !regMatch.test(url)}
            />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default UploadFile;

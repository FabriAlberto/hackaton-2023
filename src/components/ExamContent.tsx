import { Card, Grid, Typography, Button } from "@mui/material";
import ExamQuestions from "./ExamQuestions";
import { useUtilsContext } from "../hooks/useUtilsContext";
import { useState } from "react";
import { useLoadingContext } from "../context/HandleUtilsContext";
type Props = {
  reloadStepper: () => void;
};
const ExamContent = ({ reloadStepper }: Props) => {
  const { exam } = useUtilsContext();
  console.log(exam);
  const [examFinished, setExamFinished] = useState(false);
  const { hideSpinner, showSpinner } = useLoadingContext();
  const handleExamComplete = () => {
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      setExamFinished(true);
    }, 3000);
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
        {examFinished ? (
          <Grid container>
            <Grid item xs={12} display={"flex"} justifyContent={"center"}>
              <Typography variant="h3">
                FeedBack de Examen inteligente 💻
              </Typography>
            </Grid>
            <Grid item xs={12} mt={3}>
              <Typography>
                Felicidades por completar correctamente el examen inteligente
                para validar tus conocimientos con respecto al contenido
                recientemente visto 🥳🎉. Has demostrado tener un buen
                entendimiento general del tema, y tus respuestas reflejan un
                nivel de conocimiento bastante sólido.
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold", display: "block" }}>
                  Puntos Destacados:
                </span>{" "}
                Comprensión General: Tu capacidad para comprender los conceptos
                clave es destacable. Has demostrado un buen dominio de las ideas
                fundamentales.
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold", display: "block" }}>
                  Áreas de mejora:
                </span>{" "}
                Detalles Específicos: Algunas respuestas podrían beneficiarse de
                una mayor profundidad en cuanto a detalles específicos. Te
                animamos a profundizar más en ciertos conceptos para fortalecer
                tu comprensión.
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold", display: "block" }}>
                  Sugerencias para el Futuro:
                </span>{" "}
                Revisión Continua: Continúa revisando y reforzando tus
                conocimientos. La revisión constante te ayudará a mantener un
                conocimiento sólido y a mejorar aún más. Participación Activa:
                Considera participar activamente en discusiones relacionadas con
                el tema. Esto te permitirá obtener diferentes perspectivas y
                fortalecer tu comprensión. Estamos aquí para apoyarte en tu
                viaje de aprendizaje. ¡Sigue así y no dudes en buscar ayuda si
                la necesitas! ¡Felicidades nuevamente y buen trabajo!
              </Typography>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"end"}>
              <Button
                variant="contained"
                onClick={() => {
                  setExamFinished(false);
                  reloadStepper();
                }}
              >
                Finalizar
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h2" textAlign={"center"}>
                {"Examen inteligente"}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              // justifyContent={"center"}
              // alignItems={"center"}
              flexDirection={"column"}
              minHeight={"600px"}
              maxHeight={"700px"}
              mt={2}
              // p={5}
              /* sx={{
              overflow: "auto scroll",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888888bb",
                borderRadius: "8px",
              },
            }} */
            >
              {exam?.questions.map((question) => (
                <ExamQuestions key={question.question} question={question} />
              ))}
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"end"}>
              <Button variant="contained" onClick={() => handleExamComplete()}>
                <Typography sx={{ textTransform: "none" }}>
                  {" "}
                  Completar
                </Typography>
              </Button>
            </Grid>
          </Grid>
        )}
      </Card>
    </Grid>
  );
};
export default ExamContent;

import { Card, Grid, Typography } from "@mui/material";
import ExamQuestions from "./ExamQuestions";
import { useUtilsContext } from "../hooks/useUtilsContext";

const ExamContent = () => {
  const { exam } = useUtilsContext();
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
            sx={{
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
            }}
          >
            {exam?.questions.map((question) => (
              <ExamQuestions key={question.question} question={question} />
            ))}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
export default ExamContent;

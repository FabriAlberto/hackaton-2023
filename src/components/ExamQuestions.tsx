import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { Question } from "../types";

interface IProps {
  question: Question;
}

const ExamQuestions = ({ question }: IProps) => {
  return (
    <>
      <Typography variant="h3">{question.question}</Typography>
      {question.options.map((option) => (
        <RadioGroup key={option.text}>
          <FormControlLabel
            checked={option.correct}
            control={<Radio />}
            label={option.text}
          />
        </RadioGroup>
      ))}
    </>
  );
};
export default ExamQuestions;

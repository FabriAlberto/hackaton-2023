import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { Question } from "../types";
import { useState } from "react";

interface IProps {
  question: Question;
}

const ExamQuestions = ({ question }: IProps) => {
  const [check, setCheck] = useState("");
  const handleCheck = (e: string) => {
    setCheck(e);
  };
  return (
    <>
      <Typography variant="h3">{question.question}</Typography>
      {question.options.map((option) => (
        <RadioGroup key={option.text}>
          <FormControlLabel
            control={
              <Radio
                color="primary"
                value={option.text}
                checked={check === option.text}
                onClick={() => handleCheck(option.text)}
              />
            }
            label={option.text}
          />
        </RadioGroup>
      ))}
    </>
  );
};
export default ExamQuestions;

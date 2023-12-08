import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import Welcome from "../Welcome/Welcome";
import UploadFile from "../UploadFile/UploadFile";
import { globalTheme } from "../../themes/MuiTheme";

const DashboardComponent = () => {
  const [stepperActive, setStepperActive] = useState<number>(0);

  const nextStepp = () => {
    setStepperActive((stepperActive) => stepperActive + 1);
  };

  const backStepp = () => {
    setStepperActive((stepperActive) => stepperActive - 1);
  };

  const handleExamGenerate = () => {
    backStepp();
  };

  const MAP_STEPPERS = [
    <Welcome nextStepp={nextStepp} />,
    <UploadFile handleExamGenerate={handleExamGenerate} />,
  ];
  
  return (
    <Grid
      container
      flex={1}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      sx={{
        backgroundColor: "#fff",
        backgroundImage: ` linear-gradient(0deg,${globalTheme.palette.primary.main} 0%, #fff 100%)`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        key={stepperActive}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {MAP_STEPPERS[stepperActive]}
      </motion.div>
    </Grid>
  );
};

export default DashboardComponent;

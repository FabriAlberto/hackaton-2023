import { Grid, Button, Typography } from "@mui/material";

type Props = {
  nextStepp: () => void;
};

const Welcome = ({ nextStepp }: Props) => {
  return (
    <Grid
      container
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        item
        md={12}
        sx={{
          borderRadius: "8px",
          p: 30,
          backgroundColor: "primary",
        }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
      >
        <Typography fontSize={"60px"} variant="h1" fontWeight={600}>
          YouKnow
        </Typography>
        <Button
          color="primary"
          variant="contained"
          onClick={nextStepp}
          sx={{ width: "300px", borderRadius: "10px", mt: 4 }}
        >
          Empezar con un audio
        </Button>
      </Grid>
    </Grid>
  );
};

export default Welcome;

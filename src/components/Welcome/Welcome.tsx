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
        <Typography fontSize={"60px"} variant="h1" fontWeight={"light"}>
          YouKnow
        </Typography>
        <Typography variant="h3" fontWeight={"light"} mt={1}>
          Valida tus conocimientos desde cualquier plataforma.
        </Typography>
        <Button
          color="primary"
          variant="contained"
          onClick={nextStepp}
          sx={{ width: "300px", height: "60px", borderRadius: "10px", mt: 4 }}
        >
          Comenzar
        </Button>
      </Grid>
    </Grid>
  );
};

export default Welcome;

import { Button } from "@mui/material";
import { globalTheme } from "../../themes/MuiTheme";
import useColorMatching from "../../hooks/useColorMatching";
type Props = {
  onClick: () => void;
  disabled?: boolean;
};

const GenerateButton = ({ onClick, disabled = false }: Props) => {
  const { uselighterColor } = useColorMatching();
  const primaryColor = globalTheme.palette.primary.main;

  const stylesButton = {
    "&:hover": {
      background: `linear-gradient(0deg,${primaryColor},${uselighterColor(
        primaryColor,
        -50
      )})`,
      boxShadow: `inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 4px rgba(255, 255, 255, 0.2),0px 0px 180px 0px ${uselighterColor(
        primaryColor,
        -30
      )}`,
      transform: "translateY(-2px)",
      "& .text": {
        color: "#fff",
      },
      "&. sparkle": {
        fill: "#fff",
        transform: "scale(1.2)",
      },
    },
  };

  return (
    <Button
      className="btn"
      variant="outlined"
      onClick={onClick}
      sx={{
        borderRadius: "60px",
        transition: ".8s",
        textTransform: "none",
        width: "100%",
        ...stylesButton,
      }}
      disabled={disabled}
    >
      <svg
        height="24"
        width="24"
        fill="#FFFFFF"
        viewBox="0 0 24 24"
        data-name="Layer 1"
        id="Layer_1"
        className="sparkle"
      >
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
      </svg>

      <span className="text">Generate</span>
    </Button>
  );
};

export default GenerateButton;

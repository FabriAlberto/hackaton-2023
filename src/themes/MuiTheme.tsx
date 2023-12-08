import { ThemeOptions, createTheme } from "@mui/material";

export const globalTheme = {
  palette: {
    mode: "light",
    primary: {
      main: "#97BEE2",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#211F1F",
      contrastText: "#ffffff",
    },
    customColor: "w3123",
    divider: "#DADADA",
    text: {
      disabled: "#9A9A9A",
    },
    common: {
      white: "#fff",
    },
    error: {
      main: "#FF3B4A",
    },
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: 32,
      lineHeight: "64px",
      fontWeight: 600,
    },
    h2: {
      fontSize: 20,
      lineHeight: "32px",
      fontWeight: 600,
    },
    h3: {
      fontSize: 18,
      lineHeight: "24px",
      fontWeight: 600,
    },
    h4: {
      fontSize: 16,
      lineHeight: "18px",
      fontWeight: 600,
    },
    h5: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 600,
    },
    h6: {
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 600,
    },
    body2: {
      fontSize: 15,
      lineHeight: "20px",
      fontWeight: 400,
    },
    body1: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      lineHeight: "16px",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#D3D4D9",
            color: "#FFFFFF",
            borderColor: "transparent",
          },
        },
      },
    },
    MuiAppBar: {
      /* defaultProps: {
        elevation: 1,
      }, */
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
};

export const themeOptions = createTheme(globalTheme as ThemeOptions);

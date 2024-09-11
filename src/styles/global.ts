const colorScale = {
  // blue
  blue050: "#E8EDFF",
  blue500: "#1851FF",

  // lime
  lime200: "#E5FF87",
  lime400: "#D1FF25",

  // gray
  white: "#ffffff",
  gray050: "#F0F2F8",
  gray075: "#ECF0F9",
  gray100: "#E2E6EF",
  gray200: "#C9CDD6",
  gray300: "#B0B4BD",
  gray400: "#979BA4",
  gray500: "#7E828B",
  gray600: "#656972",
  gray700: "#4C5059",
  gray800: "#333740",
  gray900: "#1A1E27",
};
const theme = {
  colors: {
    font: {
      white: colorScale.white,
      blue: colorScale.blue500,

      black: colorScale.gray800,
      blackLight: colorScale.gray600,

      gray: colorScale.gray300,
    },

    stroke: {
      gray075: colorScale.gray075,
      gray100: colorScale.gray100,
    },

    background: {
      white: colorScale.white,
      black: colorScale.gray900,
      grayLight: colorScale.gray075,

      blue: colorScale.blue500,
      blueLight: colorScale.blue050,

      lime: colorScale.lime400,
      limeLight: colorScale.lime200,
    },
  },
};

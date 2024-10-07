const fontGenerator = (
  fontFamily = "Pretendard-Semibold",
  fontSize = "1.6rem",
  fontWeight = "normal",
  lineHeight = "normal",
  letterSpacing = "normal"
) => ({
  "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});

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
      lime: colorScale.lime400,

      black: colorScale.gray800,
      blackLight: colorScale.gray600,

      gray: colorScale.gray300,
      grayLight: colorScale.gray075,
    },

    border: {
      gray075: colorScale.gray050,
      gray100: colorScale.gray100,
      blue: colorScale.blue500,
    },

    background: {
      white: colorScale.white,
      black: colorScale.gray900,
      grayLight: colorScale.gray050,

      blueLight: colorScale.blue050,
    },

    scheme: {
      blue: {
        background: colorScale.blue500,
        font: colorScale.white,
        border: colorScale.blue500,
      },

      blueLight: {
        background: colorScale.blue050,
        font: colorScale.blue500,
        border: colorScale.blue050,
      },

      lime: {
        background: colorScale.lime400,
        font: colorScale.gray800,
        border: colorScale.lime400,
      },

      limeLight: {
        background: colorScale.lime200,
        font: colorScale.gray600,
        border: colorScale.lime200,
      },

      grayLight: {
        background: colorScale.gray050,
        font: colorScale.gray300,
        border: colorScale.gray100,
      },

      disable: {
        background: colorScale.gray050,
        font: colorScale.gray300,
        border: colorScale.gray050,
      },
    },
  },

  fonts: {
    // head
    h1: fontGenerator(
      "Pretendard-Semibold",
      "1.5rem",
      "500",
      "1.75rem",
      "-0.24px"
    ),
    h2: fontGenerator(
      "Pretendard-Semibold",
      "1.25rem",
      "550",
      "1.5rem",
      "-0.1px"
    ),
    h2_b: fontGenerator(
      "Pretendard-Bold",
      "1.25rem",
      "570",
      "1.5rem",
      "-0.1px"
    ),
    h3: fontGenerator(
      "Pretendard-Semibold",
      "1rem",
      "500",
      "1.25rem",
      "-0.16px"
    ),

    // body
    b1: fontGenerator("Pretendard-Medium", "1rem", "400", "1.5rem", "-0.25px"),
    b2: fontGenerator("Pretendard-Medium", "0.875rem", "400", "-0.25px"),
    b2_b: fontGenerator("Pretendard-Semibold", "0.875rem", "500", "-0.5px"),
    b3: fontGenerator("Pretendard-Medium", "0.75rem", "400", "1rem"),
    b3_b: fontGenerator("Pretendard-Semibold", "0.75rem", "500", "1rem"),

    // etc
    btn: fontGenerator("Pretendard-Bold", "1rem", "570", "1.5rem", "-0.2px"),
    btn2: fontGenerator(
      "Pretendard-Bold",
      "0.875rem",
      "570",
      "1.25rem",
      "-0.2px"
    ),
    chip: fontGenerator("Pretendard-Bold", "0.75rem", "570", "1rem", "-0.5px"),
    caption: fontGenerator("Pretendard-Medium", "0.625rem", "400", "0.875rem"),
  },
};

export default theme;

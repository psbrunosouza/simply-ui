import { createStitches } from "@stitches/core";

export const { css } = createStitches({
  theme: {
    colors: {
      white: "#f3f3f3",
      dark: "#262E33FF",

      primary: "#ff8e3c",
      secondary: "#eff0f3",
      tertiary: "#fffffe",
      success: "#ff8e3c",
      warning: "#ffe53c",
      danger: "#ff4c3c"
    },
    fontSizes: {
      1: "0.875rem",
      2: "1rem",
      3: "1.125rem",
      4: "1.5rem",
      5: "2rem",
    },
    space: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "2rem",
    },
    sizes: {
      sm: "1.500rem",
      md: "2.250rem",
      lg: "2.750rem"
    },
  },
});

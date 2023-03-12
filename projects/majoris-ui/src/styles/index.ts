import {createStitches} from "@stitches/core";
import {colors} from "@majoris-ui/tokens";

export const {
  globalCss,
  css,
  getCssText,
  keyframes,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors
  }
})

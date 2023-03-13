"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
var colors = {
  //neutral
  white: "#FFF",
  black: "#000",
  // gray
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray300: "#7C7C8A",
  gray400: "#505059",
  gray500: "#323238",
  gray600: "#29292E",
  gray700: "#202024",
  gray800: "#121214",
  gray900: "#080809",
  //main
  main300: "#fffffe",
  main500: "#f1f1f0",
  main700: "#d9d9d8",
  main900: "#b9b9b8",
  // highlight
  highlight300: "#c0e1fa",
  highlight500: "#3da9fc",
  highlight700: "#3089cc",
  highlight900: "#215b88",
  // details
  details300: "#f8ccd4",
  details500: "#ef4565",
  details700: "#d23c58",
  details900: "#942a3e",
  // paragraph
  paragraph300: "#8393a6",
  paragraph500: "#5f6c7b",
  paragraph900: "#46505b",
  // header
  header300: "#265d83",
  header500: "#094067",
  header900: "#062b46",
  //success
  success300: "#b5fab9",
  success500: "#49ef53",
  success700: "#3dc746",
  success900: "#2b8c31",
  //danger
  danger300: "#fab5b5",
  danger500: "#ef4949",
  danger700: "#c73d3d",
  danger900: "#8c2b2b",
  //warning
  warning300: "#f8ecb3",
  warning500: "#efd349",
  warning700: "#d0b73f",
  warning900: "#9f8c31"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors
});

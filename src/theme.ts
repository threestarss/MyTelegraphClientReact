import { createMuiTheme } from "@material-ui/core";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: false;
    lg: false;
    xl: false;
  }
}

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 976,
    },
  },
  typography: {
    fontFamily: 'CustomSansSerif,"Lucida Grande",Arial,sans-serif;',
    body1: {
      fontSize: 18,
      lineHeight: 1.58,
    },
  },
  palette: {
    type: "dark",
    text: {
      primary: "#f8f9fa",
    },
    background: {
      default: "#212529",
      paper: "#333",
    },
  },
});

// declare module "@material-ui/core/styles/createBreakpoints" {
//   interface BreakpointOverrides {
//     xs: false;
//     sm: false;
//     md: false;
//     lg: false;
//     xl: false;
//     mobile: true;
//     desktop: true;
//   }
// }

// export const theme = createMuiTheme({
//   breakpoints: {
//     values: {
//       mobile: 0,
//       desktop: 976
//     },
//   },
// })

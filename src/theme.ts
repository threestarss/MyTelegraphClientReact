import { createMuiTheme } from '@material-ui/core';

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
      sm: 976
    },
  },
  typography: {
    fontFamily: 'CustomSerif,Georgia,Cambria,"Times New Roman",serif'
  }
})

// TODO: find out why Container component maxWidth property type doesn't like custom breakpoints
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
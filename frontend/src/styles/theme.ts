export default {
  colors: {
    primary: "#0393BE",
    secondary: "#0DBF87",
    red: "#EE4C4C",
    yellow: "#F4DA85",
    lightGrey: "#BFC1C2",
    gray: "#717273",
    white: "#F8FAFA",
    black: "#13110C",
    disabled: "#E0E0E0E0",
    transparent: "transparent",
    background: "#F0F0F0",
  },
  shadows: {
    none: "none",
    default: `rgba(0, 0, 0, 0.2) 0px 1px 1px -1px,
      rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
      rgba(0, 0, 0, 0.12) 0px 0.5px 2px 0px;`,
    notFocus: `0.3px 0.3px 1px 1px rgba(0,0,0,0.14),
      -0.3px -0.3px 1px 0px rgba(0,0,0,0.11),
      0px 0.1px 1px 0px rgba(0,0,0,0.12)`,
    focus: `0.3px 0.2px 1px 1px rgba(0,0,0,0.30),
      -0.4px -0.2px 1px 0px rgba(0,0,0,0.25),
      0px 0.1px 1px 0px rgba(0,0,0,0.20)`,
    hover: `rgba(0, 0, 0, 0.2) 0px 4px 2px -3px,
        rgba(0, 0, 0, 0.14) 0px 3px 3px 0px,
        rgba(0, 0, 0, 0.12) 0px 2px 7px 0px;`,
  },
  fonts: {
    family: {
      primary: "'Poppins', sans-serif",
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 600,
      mediumBold: 700,
      black: 800,
      extraBlack: 900,
    },
    sizes: {
      xxsmall: "1rem",
      xsmall: "1.2rem",
      small: "1.6rem",
      medium: "2.4rem",
      large: "3.2rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
    },
    style: {
      normal: "normal",
      italic: "italic",
      oblique: "oblique",
    },
  },
  breakpoints: {
    phones: "(max-width: 768px)",
  },
  transitions: {
    fast: "all 0.3s ease-in-out;",
    normal: "all 1s ease-in-out;",
    slow: "all 2s ease-in-out;",
    hover: `background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s,
        box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s,
        border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s,
        color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s`,
  },
  layers: {
    base: 10,
    menu: 20,
    cardOverlay: 30,
    card: 40,
    overlay: 50,
    modal: 60,
    alwaysOnTop: 70,
  },
  spacings: {
    none: "0rem",
    xxsmall: "0.8rem",
    xsmall: "1.8rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
    huge: "6.2rem",
    xhuge: "6.4rem",
    auto: "auto",
  },
  layout: {
    display: {
      block: "block",
      inline: "inline",
      flex: "flex",
    },
    flexDirection: {
      row: "row",
      column: "column",
      rowReverse: "row-reverse",
      columnReverse: "column-reverse",
    },
    flexWrap: {
      wrap: "wrap",
      nowrap: "nowrap",
      wrapReverse: "wrap-reverse",
    },
    justifyContent: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      spaceBetween: "space-between",
      spaceAround: "space-around",
      spaceEvenly: "space-evenly",
    },
    alignItems: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      baseline: "baseline",
      stretch: "stretch",
    },
    alignContent: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      spaceBetween: "space-between",
      spaceAround: "space-around",
    },
  },
} as const;

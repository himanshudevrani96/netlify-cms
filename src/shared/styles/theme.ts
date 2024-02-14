interface Theme {
  primaryBackground: string;
  secondaryBackground: string;
  primaryText: string;
  secondaryText: string;
  background: string;
  stroke: string;
  white: string;
  black: string;
  accentColor: string;
  error: string;
}

export const darkTheme: Theme = {
  primaryBackground: "#141718",
  secondaryBackground: "#1F2223",
  primaryText: "#ffffff",
  secondaryText: "#808191",
  background: `linear-gradient(0deg, #141718 100%, #232627)`,
  stroke: "#363333",
  white: "#fff",
  black: "#000",
  accentColor: "#0084FF",
  error: "#DC2626",
};

export const lightTheme: Theme = {
  primaryBackground: "#E8F1F3",
  secondaryBackground: "#F9F9F9",
  primaryText: "#1F2223",
  secondaryText: "#808191",
  background: "#E8F1F3",
  stroke: "#DBDBDB",
  white: "#fff",
  black: "#000",
  accentColor: "#2fd3b4",
  error: "#DC2626",
};

export const fonts = {
  manrope: "",
  outfit: "",
  inter: "",
};

interface FontSizes {
  [key: string]: number;
}

export const fontSizes: FontSizes = {
  xs: 12,
  sm: 13,
  md: 14,
  lg: 16,
  xl: 24,
  xxl: 32,
};

type ScreenSizes = {
  [key: string]: number;
};

export const screenSizes: ScreenSizes = {
  xs: 0,
  s: 360,
  sx: 450,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xlr: 1460,
  xxl: 1800,
};

interface TypoGraphy {
  [key: string]: number;
}
export const typography: TypoGraphy = {
  h1: 32,
  h2: 28,
  h3: 22,
  h4: 18,
  h5: 16,
  h6: 12,
};

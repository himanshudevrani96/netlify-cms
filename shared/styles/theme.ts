interface Theme {
  mode: string;
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
  blocksColor: string;
  borderColor: string;
  gradient: string;
  gradientForStaking: string;
  belowBannerText: string;
  bannerBackground: string;
  backgroundColorAlpha: string;
  gradientTilted: string;
  gradientHome: string;
  lightGrey: string;
  lightWhite: string;
  gradientParallel: string;
  stepColor: string;
}

export const darkTheme: Theme = {
  mode: "dark",
  primaryBackground: "#141718",
  secondaryBackground: "#1F2223",
  primaryText: "#FCFCFD",
  secondaryText: "#808191",
  background: "#0E0E12",
  stroke: "#2FD3B4",
  white: "#fff",
  black: "#000",
  accentColor: "#2fd3b4",
  error: "#DC2626",
  blocksColor: "#1E1F28",
  borderColor: "#32373C",
  lightGrey: "#777E90",
  stepColor: "#777E90",
  gradient: "linear-gradient(267.4deg, #2FD3B4 0%, #2FD3B4 0.01%, #E1D91D 100%)",
  gradientForStaking: "linear-gradient(352.4deg, #2FD3B4 0%, #2FD3B4 0.01%, #E1D91D 100%)",
  belowBannerText: "rgba(255, 255, 255, 0.6)",
  bannerBackground: "rgba(0, 0, 0, 0)",
  backgroundColorAlpha: "rgba(0, 0, 0, 0.1)",
  lightWhite: "#000",
  gradientParallel: "linear-gradient(180deg, rgba(252, 252, 253, 0) 0%, #000 83.38%)",
  gradientTilted: "linear-gradient(184deg, rgba(252, 252, 253, 0) 47.6%, #000 70.38%)",
  gradientHome: "linear-gradient(180deg, rgba(20, 20, 22, 0) 0%, #141416 61.38%)",
};

export const lightTheme: Theme = {
  mode: "light",
  primaryBackground: "#E8F1F3",
  secondaryBackground: "#F9F9F9",
  primaryText: "#1F2223",
  secondaryText: "#1F2223",
  background: "#ffffff",
  stroke: "#2FD3B4",
  white: "#fff",
  black: "#000",
  stepColor: "#ffffffb3",
  accentColor: "#2fd3b4",
  error: "#DC2626",
  blocksColor: "#F5F5F5",
  lightGrey: "#777E90",
  borderColor: "rgba(229, 229, 234, 1)",
  gradient: "linear-gradient(267.4deg, #2FD3B4 2%, #2FD3B4 0.1%, #E1D91D 100%)",
  gradientForStaking: "linear-gradient(352.4deg, #2FD3B4 0%, #2FD3B4 0.01%, #E1D91D 100%)",
  belowBannerText: "#1F2223",
  bannerBackground: "rgba(0, 0, 0, 0)",
  backgroundColorAlpha: "rgba(206, 206, 206, 0.5)",
  lightWhite: "#FCFCFD",
  gradientParallel: "linear-gradient(180deg, rgba(252, 252, 253, 0) 0%, #FCFCFD 83.38%)",
  gradientTilted: "linear-gradient(184deg, rgba(252, 252, 253, 0) 63.6%, #FCFCFD 88.38%)",
  gradientHome: "linear-gradient(180deg, rgba(252, 252, 253, 0) 27.6%, #FCFCFD 61.38%)",
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

export const screenSizes: ScreenSizes | any = {
  xs: 0,
  s: 390,
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

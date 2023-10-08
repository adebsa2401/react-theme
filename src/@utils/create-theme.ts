import type {ColorScheme, CreateThemeArgs} from "../@types";

const createTheme = (theme: CreateThemeArgs) => {
  const lightTheme = {
    ...(theme.dark ?? {}),
    ...theme.default,
    ...(theme.light ?? {})
  };

  const darkTheme = {
    ...(theme.light ?? {}),
    ...theme.default,
    ...(theme.dark ?? {})
  };

  return (colorScheme: ColorScheme) => {
    switch (colorScheme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
    }
  };
}

export default createTheme;

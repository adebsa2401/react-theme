import ThemeContext from "@/theme-context";
import {useContext} from "react";
import {IThemeContext} from "@/types";

const useTheme = <T extends object = {}>() => {
  const context = useContext(ThemeContext);

  return context as IThemeContext<T>;
}

export default useTheme;

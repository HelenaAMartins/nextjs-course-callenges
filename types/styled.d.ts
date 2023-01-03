import "styled-components";

declare module "styled-components" {
  interface ITheme {
    bg: string;
    primary: string;
    secondary: string;
    tertiary: string;
    dark: string;
    danger: string;
    black: string;
    white: string;
    button: {
      default: string;
      hover: string;
    };
  }

  export interface DefaultTheme {
    colors: ITheme;
  }
}

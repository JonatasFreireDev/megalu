import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: {
      mainTheme: string;
      secondTheme: string;
    };
    button: {
      background: string;
      textColor: string;
    };
    label: {
      textColor: string;
    };
    input: {
      textColor: string;
      border: string;
      normal: string;
      active: string;
      error: string;
      placeholder: string;
    };
    icon: {
      white: string;
      grey: string;
    };
    text: {
      white: string;
      grey: string;
    };
    colors: {
      purple: string;
      green: string;
    };
    headerColors: {
      yellow: string;
      orange: string;
      red: string;
      rose: string;
      purple: string;
      deepPurple: string;
      blue: string;
      cyan: string;
      lightGreen: string;
      green: string;
    };
  }
}

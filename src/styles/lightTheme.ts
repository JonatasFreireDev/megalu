import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  theme: {
    mainTheme: '#0086FF',
    secondTheme: '#212121, 100%',
  },
  button: {
    background: '#212121',
    textColor: '#fff',
  },
  label: {
    textColor: '#212121',
  },
  input: {
    textColor: '#212121',
    border: '#424242',
    normal: '#424242',
    active: '#424242',
    error: '#8F0109',
    placeholder: '#9E9E9E',
  },
  icon: {
    white: '#fff',
    grey: '#212121',
  },
  text: {
    white: '#ffffff',
    grey: '#212121',
  },
  colors: {
    green: '#58C22E',
    purple: '#DB44A7',
  },
  headerColors: {
    yellow: '#FFCE00',
    orange: '#FB9600',
    red: '#E25335',
    rose: '#DE349E',
    purple: '#BF2FDC',
    deepPurple: '#5D33D5',
    blue: '#2B7CD7',
    cyan: '#33C3DD',
    lightGreen: '#32D9A1',
    green: '#3FCB2A',
  },
};

export { lightTheme };

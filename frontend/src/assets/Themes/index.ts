import darkTheme from './dark';
import lightTheme from './light';

export type TThemeType = {
  type: string;
  colors: {
    primaryBackground: string;
    secondaryBackground: string;
    thirdBackground: string;
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
  };
};

export { darkTheme, lightTheme };

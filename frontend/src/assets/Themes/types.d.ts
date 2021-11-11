import 'styled-components';
import { TThemeType } from '.';

declare module 'styled-components' {
  export interface DefaultTheme extends TThemeType {}
}

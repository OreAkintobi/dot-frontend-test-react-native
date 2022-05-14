import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { colors } from './colors';
import fonts from './fonts';
import { scaleArray, scaleHP, scaleVerticalHorizontal, scaleWP } from './scale';

export const theme = {
  fonts,
  scaleArray,
  scaleVerticalHorizontal,
  scaleHP,
  scaleWP,
  colors,
};

export type TCssStyle = FlattenInterpolation<ThemeProps<DefaultTheme>>;

export default theme;

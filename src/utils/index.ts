import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width > 480;
export const numberOfColumns = !isTablet ? 2 : 3;
export const tileSize = width / numberOfColumns - 16;

export * from './hooks';

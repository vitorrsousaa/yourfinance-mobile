import { StatusBar } from 'react-native';
import { isAndroid } from './isAndroid';

export const statusBarHeight = isAndroid ? StatusBar.currentHeight : 0;

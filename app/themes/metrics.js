import {Dimensions, Platform} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import * as DeviceTypeHelper from './deviceType';
const {width, height} = Dimensions.get('window');

const isXSeriesIphone = DeviceTypeHelper.isXSeriesIphone();
const isIos = Platform.OS === 'ios' ? true : false;

const addHeader = Platform.OS === 'ios' ? (isXSeriesIphone ? 40 : 20) : 20;
const addFooter = Platform.OS === 'ios' ? (isXSeriesIphone ? 44 : 0) : 0;
const marginFooter = Platform.OS === 'ios' ? (isXSeriesIphone ? 10 : 40) : 40;

const REAL_WINDOW_HEIGHT = ExtraDimensions.get('REAL_WINDOW_HEIGHT');
const REAL_WINDOW_WIDTH = ExtraDimensions.get('REAL_WINDOW_WIDTH');
const STATUS_BAR_HEIGHT = ExtraDimensions.get('STATUS_BAR_HEIGHT');
const SOFT_MENU_BAR_HEIGHT = ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT');
const SMART_BAR_HEIGHT = ExtraDimensions.get('SMART_BAR_HEIGHT');

const androidMenuesSize = isIos ? 0 : STATUS_BAR_HEIGHT + SOFT_MENU_BAR_HEIGHT;

const metrics = {
  header: 60 + addHeader,
  addHeader,
  addFooter,
  marginFooter,

  REAL_WINDOW_HEIGHT,
  REAL_WINDOW_WIDTH,
  STATUS_BAR_HEIGHT,
  SOFT_MENU_BAR_HEIGHT,
  SMART_BAR_HEIGHT,

  androidMenuesSize,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  borderRadius: 8,
  BtnBorderRadius: 5,
};

export {metrics};

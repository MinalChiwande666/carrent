import {Dimensions, Platform} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const guidelineBaseWidth = 375;
// const guidelineBaseHeight = 812;

const horizontalScale = (size: number) =>
  (deviceWidth / guidelineBaseWidth) * size;
const isIpad = () => {
  if (deviceWidth > 500) {
    return true;
  } else {
    return false;
  }
};
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
// responsive
const responsiveHeight = (h: any) => {
  return deviceHeight * (h / 100);
};
const responsiveWidth = (w: any) => {
  return deviceWidth * (w / 100);
};

const NAV_HEIGHT = responsiveHeight(6.6);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 24;

// button size
const btnWidth = {
  normal: responsiveWidth(74.4),
  large: responsiveWidth(91.47),
};

let btnHeight = 48;
export const tabHeight =
  Platform.OS === 'ios' ? responsiveHeight(9.5) : responsiveHeight(8);
export const drawerWidth = responsiveWidth(80);
let smallbtnHeight = 30;

let scrollableTabHeight = 50;

// input box height
let inputHeight = 43;

// marginHorizontal
const marginHorizontal = {
  large: responsiveWidth(12.8),
  semiLarge: responsiveWidth(17.6),
  seminormal: responsiveWidth(7.2), // margin = 48
  normal: responsiveWidth(8.5), // margin = 32
  semiSmall: responsiveWidth(3), // margin = 24
  small: responsiveWidth(4.5), // margin = 16,
  extraSmall: responsiveWidth(2),
  XXS: responsiveWidth(1.5),
  XLARGE: responsiveWidth(24),
  XXL: responsiveWidth(28),
  XXXL: responsiveWidth(35),
};

// margin or padding vertical
const spaceVertical = {
  XXlarge: responsiveHeight(20),
  extraLarge: responsiveHeight(12),
  large: responsiveHeight(7.19), // space = 48
  normal: responsiveHeight(4.8), // space = 32
  semiSmall: responsiveHeight(3.6), // space = 24
  small: responsiveHeight(2.4), // space = 16
  extraSmall: responsiveHeight(1.5),
  XXS: responsiveHeight(1),
};

let reptativeColors = {
  black: '#121314',
  white: '#fff',
  blue: '#05447A',
};

//light theme
const colors = {
  primary: '#05447A',
  secondary: '#D80E0E',
  bgblue: '#9DCFFB',
  red: '#D80E0E',
  lightblue:'#E5ECF1',
  lightred:'#F98B8B',
  golden: '#C99B36',
  blue: reptativeColors.blue,
  white: reptativeColors.white,
  black: reptativeColors.black,
  lightGray: 'rgb(216,216,216)',
  gray: '#9e9e9e',
};

// font family
const fontFamily = {
  light: 'Roboto-Light',
  italic: 'Roboto-Italic',
  thin: 'Roboto-Thin',
  regular: 'Roboto-Regular',
  lightCondensed: 'RobotoCondensed-Light',
  italicCondensed: 'RobotoCondensed-Italic',
  regularCondensed: 'RobotoCondensed-Regular',
  lightSlab: 'RobotoSlab-Light',
  mediumSlab: 'RobotoSlab-Medium',
  boldSlab: 'RobotoSlab-SemiBold',
  regularSlab: 'RobotoSlab-Regular',
};

const LARGE_DEVICE_SCALE = 1.3;

let fontSize: any = {
  nanoSize: 8,
  extraSmall: 10,
  small: 12,
  normal: 14,
  medium: 16, // ahi sudhi j karvu
  semiLarge: 19,
  large: 22,
  extraLarge: 28,
  sizeGuideTxt: 21,
  sizeTxt: 62,
  starIc: 16,
  tileHeader: 10,
  addIc: 20,
  Xlarge: 30,
  XXLarge: 48,
  XXXLarge: 83,
};

let lineHeight = {
  normal: 24,
  small: 16,
};

let borderRadius = {
  normal: 4,
  ring: 100,
  semiLarge: 10,
  inputRadius: 15,
  boxRadius: 25,
  boxRadius2: 20,
  XLarge: 50,
  L150: 150,
  L30: 30,
};

// step indicator
let stepIndicatorHeight = 407;
let indicatorStyles: any = {
  stepIndicatorSize: 16,
  currentStepIndicatorSize: 16,
  stepStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: colors.black,
  stepStrokeFinishedColor: colors.black,
  stepStrokeUnFinishedColor: colors.lightGray,
  separatorStrokeWidth: 1,
  separatorFinishedColor: colors.black,
  separatorUnFinishedColor: colors.lightGray,
  stepIndicatorFinishedColor: colors.black,
  stepIndicatorUnFinishedColor: colors.white,
  stepIndicatorCurrentColor: colors.black,
  stepIndicatorLabelFontSize: 10,
  currentStepIndicatorLabelFontSize: 10,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelSize: 16,
  labelColor: 'rgb(200,200,200)',
  currentStepLabelColor: colors.black,
  subLabelColor: 'rgb(200,200,200)',
  currentStepSubLabelColor: colors.gray,
};

// login screen: bottom text
let bottomTxtHeight = 19;

if (deviceWidth >= 768) {
  fontSize = {
    extraSmall: 12 * LARGE_DEVICE_SCALE,
    small: 14 * LARGE_DEVICE_SCALE,
    normal: 16 * LARGE_DEVICE_SCALE,
    medium: 18 * LARGE_DEVICE_SCALE,
    semiLarge: 20 * LARGE_DEVICE_SCALE,
    large: 24 * LARGE_DEVICE_SCALE,
    sizeGuideTxt: 64 * LARGE_DEVICE_SCALE,
    starIc: 18 * LARGE_DEVICE_SCALE,
    tileHeader: 19 * LARGE_DEVICE_SCALE,
    addIc: 22 * LARGE_DEVICE_SCALE,
  };
  lineHeight = {
    normal: 24 * LARGE_DEVICE_SCALE,
    small: 16 * LARGE_DEVICE_SCALE,
  };
  borderRadius = {
    normal: 4 * LARGE_DEVICE_SCALE,
    ring: 100 * LARGE_DEVICE_SCALE,
    semiLarge: 10 * LARGE_DEVICE_SCALE,
    XLarge: 50 * LARGE_DEVICE_SCALE,
    boxRadius: 20 * LARGE_DEVICE_SCALE,
    boxRadius2: 25 * LARGE_DEVICE_SCALE,
    L150: 150 * LARGE_DEVICE_SCALE,
    inputRadius: 15 * LARGE_DEVICE_SCALE,
    L30: 30 * LARGE_DEVICE_SCALE,
  };
  btnHeight = 48 * LARGE_DEVICE_SCALE;
  smallbtnHeight = 24 * LARGE_DEVICE_SCALE;
  inputHeight = 43 * LARGE_DEVICE_SCALE;
  scrollableTabHeight = 40 * LARGE_DEVICE_SCALE;
  indicatorStyles = {
    stepIndicatorSize: 16 * LARGE_DEVICE_SCALE,
    currentStepIndicatorSize: 16 * LARGE_DEVICE_SCALE,
    stepStrokeWidth: 2 * LARGE_DEVICE_SCALE,
    currentStepStrokeWidth: 2 * LARGE_DEVICE_SCALE,
    stepStrokeCurrentColor: colors.black,
    stepStrokeFinishedColor: colors.black,
    stepStrokeUnFinishedColor: colors.lightGray,
    separatorStrokeWidth: 1,
    separatorFinishedColor: colors.black,
    stepIndicatorUnFinishedColor: colors.white,
    stepIndicatorCurrentColor: colors.black,
    stepIndicatorLabelFontSize: 10 * LARGE_DEVICE_SCALE,
    currentStepIndicatorLabelFontSize: 10 * LARGE_DEVICE_SCALE,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: 'transparent',
    stepIndicatorLabelUnFinishedColor: 'transparent',
    labelSize: 16 * LARGE_DEVICE_SCALE,
    labelColor: 'rgb(200,200,200)',
    currentStepLabelColor: colors.black,
    subLabelColor: 'rgb(200,200,200)',
    currentStepSubLabelColor: colors.gray,
  };
  stepIndicatorHeight = 407 * LARGE_DEVICE_SCALE;
  bottomTxtHeight = 19 * LARGE_DEVICE_SCALE;
}

export {
  responsiveHeight,
  responsiveWidth,
  isIpad,
  moderateScale,
  btnWidth,
  btnHeight,
  smallbtnHeight,
  inputHeight,
  marginHorizontal,
  spaceVertical,
  scrollableTabHeight,
  NAV_HEIGHT,
  STATUSBAR_HEIGHT,
  deviceHeight,
  deviceWidth,
  colors,
  fontSize,
  fontFamily,
  lineHeight,
  borderRadius,
  indicatorStyles,
  stepIndicatorHeight,
  bottomTxtHeight,
  reptativeColors,
};

import {Platform, PixelRatio} from 'react-native';
import {colors} from './colors';
import {metrics} from './metrics';

const type = {
  heavy: 'Avenir-Heavy',
  medium: 'Avenir-Medium',
  roman: 'Avenir-Roman',
  book: 'Avenir-Book',
};

// based on iphone 5s's scale
const scale = metrics.screenWidth / 500;

function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const size = {
  h1: normalize(38),
  h2: normalize(34),
  h3: normalize(30),
  h4: normalize(24),
  h5: normalize(20),
  h6: normalize(18),
  input: normalize(19),
  regular: normalize(14),
  medium: normalize(13),
  small: normalize(13),
  tiny: normalize(8.5),
};

const styles = {
  textBold: {
    fontFamily: type.normal,
    color: colors.black,
    fontSize: size.regular,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  textMedium: {
    fontWeight: '500',
    fontFamily: type.black,
    color: colors.white,
    fontSize: size.h3,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  textNormal: {
    fontFamily: type.normal,
    color: colors.white,
    fontSize: size.regular,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  textSlideBoldSmall: {
    fontFamily: type.bold,
    color: '#fff',
    fontSize: size.medium,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  underlineText: {
    fontFamily: type.bold,
    color: '#fff',
    fontSize: size.small,
    textAlignVertical: 'center',
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
};

export {type, size, styles};

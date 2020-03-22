import {colors} from './colors';

const type = {
  heavy: 'Avenir 85 Heavy',
  medium: 'Avenir LT Std 65 Medium',
  roman: 'Avenir LT Std 55 Roman',
  book: 'Avenir LT Std 45 Book',
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 8.5,
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

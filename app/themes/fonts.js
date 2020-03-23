import {colors} from './colors';

const type = {
  heavy: 'Avenir-Heavy',
  medium: 'Avenir-Medium',
  roman: 'Avenir-Roman',
  book: 'Avenir-Book',
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 14,
  medium: 12,
  small: 10,
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

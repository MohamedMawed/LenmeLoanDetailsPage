import {StyleSheet} from 'react-native';
import {metrics, colors, fonts} from '../../themes';

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight * 0.08,
    backgroundColor: colors.white,
    flexDirection: 'row',
    width: metrics.screenWidth * 0.4,
    borderRadius: metrics.borderRadius,
    justifyContent: 'center',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: fonts.size.small,
    color: colors.lightGray,
    fontFamily: fonts.type.book,
  },
  moreIcon: {width: 20, alignSelf: 'flex-start', marginRight: 10},
  value: {
    fontSize: fonts.size.h4,
    color: colors.black,
    fontFamily: fonts.type.book,
  },
  body: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 10,
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  textContainer: {
    width: '80%',
    height: '100%',
    paddingLeft: 14,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sideCol: {
    width: 10,
    height: '105%',
    position: 'absolute',
    left: -5,
    top: -2,
    borderRadius: metrics.borderRadius,
    backgroundColor: colors.orange,
  },
});

export {styles};

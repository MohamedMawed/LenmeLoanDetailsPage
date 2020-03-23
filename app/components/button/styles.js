import {StyleSheet} from 'react-native';
import {metrics} from '../../themes';

const styles = StyleSheet.create({
  button: {
    width: metrics.screenWidth - 60,
    height: metrics.screenHeight * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: metrics.BtnBorderRadius,
  },
});

export {styles};

import {StyleSheet} from 'react-native';
import {metrics, colors} from './../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    borderRadius: metrics.screenWidth * 0.25,
    borderWidth: 7,
    padding: -10,
    borderColor: colors.lightBlue,
    height: metrics.screenHeight * 0.11,
    width: metrics.screenHeight * 0.11,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {styles};

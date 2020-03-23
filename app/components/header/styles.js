import {StyleSheet} from 'react-native';
import {metrics} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: metrics.screenHeight * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    width: '3%',
    height: '100%',
  },
});

export {styles};

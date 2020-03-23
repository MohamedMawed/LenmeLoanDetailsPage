import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {colors, fonts} from '../../themes';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
const ButtonGradient = ({
  title,
  titleColor,
  onPress,
  bgColor = colors.white,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={colors.buttonGradient}
      onPress={() => onPress}
      activeOpacity={0.8}
      style={[styles.button, {backgroundColor: bgColor}]}>
      <Text style={{fontSize: fonts.size.input, color: titleColor}}>
        {title}
      </Text>
    </LinearGradient>
  );
};

export {ButtonGradient};

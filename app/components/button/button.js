import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {colors, fonts} from '../../themes';
import {styles} from './styles';
const Button = ({title, titleColor, onPress, bgColor = colors.white}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress}
      activeOpacity={0.8}
      style={[styles.button, {backgroundColor: bgColor}]}>
      <Text style={{fontSize: fonts.size.input, color: titleColor}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export {Button};

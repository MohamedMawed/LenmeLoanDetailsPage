import React from 'react';
import {View, Image, Text} from 'react-native';
import {images} from '../../themes';
import {styles} from './styles';

const HeaderWithBack = ({title}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backIcon}
        resizeMode="contain"
        source={images.back}
      />
      <Text>{title}</Text>
    </View>
  );
};

export {HeaderWithBack};

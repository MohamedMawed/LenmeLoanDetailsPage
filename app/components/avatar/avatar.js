import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';

const Avatar = ({source}) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={{width: '100%'}} source={source} />
    </View>
  );
};

export {Avatar};

import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {images} from '../../themes';

const Avatar = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={{width: '100%'}}
          source={images.profile}
        />
      </View>
    </>
  );
};

export {Avatar};

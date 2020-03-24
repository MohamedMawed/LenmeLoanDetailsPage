import React from 'react';
import {Image} from 'react-native';

const PngIcon = ({source}) => {
  return <Image style={{width: 20}} resizeMode="contain" source={source} />;
};

export {PngIcon};

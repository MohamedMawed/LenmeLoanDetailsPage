import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {images, fonts, colors} from '../../themes';

const LoanRequestDetailsFinancialCard = ({
  barColor = colors.orange,
  title,
  value,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.sideCol, {backgroundColor: barColor}]} />
      <View style={styles.body}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
        <Image
          style={styles.moreIcon}
          resizeMode="contain"
          source={images.more}
        />
      </View>
    </View>
  );
};

export {LoanRequestDetailsFinancialCard};

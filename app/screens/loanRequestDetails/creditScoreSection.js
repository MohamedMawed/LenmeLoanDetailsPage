import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Avatar} from '../../components/avatar';
import {PngIcon} from '../../components/icon';
import {images} from '../../themes';

const CreditSection = () => {
  return (
    <View style={styles.userSectionContainer}>
      <View style={styles.avatarContainer}>
        <Avatar />
      </View>
      <View style={styles.lenmeScoreContainer}>
        <Text style={styles.userName}>IO</Text>
        <View style={styles.lenmeScorePart}>
          <Text style={styles.lenmeScoreText}>LENME SCORE</Text>
          <View style={styles.lenmeScoreValueContainer}>
            <PngIcon source={images.lenmeScore} />
            <Text style={styles.lenmeScoreValue}>70</Text>
            <PngIcon source={images.more} />
          </View>
          <Text style={styles.vantageScoreText}>Vantage Score 4.0</Text>
        </View>
      </View>
      <View style={{flex: 6}}>
        <View style={{flex: 8}} />
        <View style={{flex: 14}}>
          <Text style={styles.lenmeScoreText}>CREDIT SCORE</Text>
          <View style={[styles.lenmeScoreValueContainer, {marginTop: -10}]}>
            <PngIcon source={images.creditScore} />
            <Text style={styles.lenmeScoreValue}>500-630</Text>
            <PngIcon source={images.more} />
          </View>
        </View>
      </View>
    </View>
  );
};

export {CreditSection};

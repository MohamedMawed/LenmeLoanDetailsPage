import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Avatar} from '../../components/avatar';
import {PngIcon} from '../../components/icon';
import {images} from '../../themes';

// the credit object structure
// const intialCredit = {
//   user: {
//     name: string,
//     avatar: image,
//   },
//   lenmeScore: {
//     credit: number,
//     vantage: float,
//   },
//   creditScore: {
//     from: number,
//     to: number,
//   },
// };

const CreditSection = ({credit}) => {
  return (
    <View style={styles.userSectionContainer}>
      <View style={styles.avatarContainer}>
        <Avatar source={credit.user.avatar} />
      </View>
      <View style={styles.lenmeScoreContainer}>
        <Text style={styles.userName}>{credit.user.name}</Text>
        <View style={styles.lenmeScorePart}>
          <Text style={styles.lenmeScoreText}>LENME SCORE</Text>
          <View style={styles.lenmeScoreValueContainer}>
            <PngIcon source={images.lenmeScore} />
            <Text style={styles.lenmeScoreValue}>
              {credit.lenmeScore.credit}
            </Text>
            <PngIcon source={images.more} />
          </View>
          <Text style={styles.vantageScoreText}>
            Vantage Score {credit.lenmeScore.vantage}
          </Text>
        </View>
      </View>
      <View style={{flex: 6}}>
        <View style={{flex: 8}} />
        <View style={{flex: 14}}>
          <Text style={styles.lenmeScoreText}>CREDIT SCORE</Text>
          <View style={[styles.lenmeScoreValueContainer, {marginTop: -10}]}>
            <PngIcon source={images.creditScore} />
            <Text style={styles.lenmeScoreValue}>
              {credit.creditScore.from}-{credit.creditScore.to}
            </Text>
            <PngIcon source={images.more} />
          </View>
        </View>
      </View>
    </View>
  );
};

export {CreditSection};

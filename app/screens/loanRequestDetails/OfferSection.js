import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Button, ButtonGradient} from '../../components/button';
import {colors, metrics} from '../../themes';
import LinearGradient from 'react-native-linear-gradient';

const OfferSection = () => {
  return (
    <View style={styles.offerContainer}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.offerItemTitle}>Investment Amount</Text>
          <View style={styles.offerValueContainer}>
            <Text style={styles.offerItemFirstValue}>$</Text>
            <Text style={styles.offerItemSecondValue}>970</Text>
          </View>
        </View>
        <View style={{marginLeft: metrics.screenWidth * 0.09}}>
          <Text style={styles.offerItemTitle}>Payback Period</Text>
          <View style={styles.offerValueContainer}>
            <Text style={styles.offerItemSecondValue}>1</Text>
            <Text style={styles.offerItemFirstValue}>month</Text>
          </View>
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <Text style={styles.offerItemTitle}>Annual Intersets</Text>
        <Text style={styles.recommandedRateText}>
          Recommanded Interset Rate: 3%
        </Text>
        <View style={styles.offerValueContainer}>
          <Text style={styles.offerItemSecondValue}>4</Text>
          <Text style={styles.offerItemFirstValue}>%</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={colors.buttonGradient}
          style={styles.progressValue}
        />
        <View style={styles.progressCircle} />
      </View>
      <View
        style={{
          width: metrics.screenWidth - 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.recommandedRateText}>0%</Text>
        <Text style={styles.recommandedRateText}>100%</Text>
      </View>
      <View style={{height: 10}} />
      <Button title={'Dismiss'} titleColor={colors.red} />
      <View style={{height: 15}} />
      <ButtonGradient title={'Make Offer'} titleColor={colors.white} />
    </View>
  );
};

export {OfferSection};

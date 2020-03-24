import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Button, ButtonGradient} from '../../components/button';
import {colors, metrics} from '../../themes';
import LinearGradient from 'react-native-linear-gradient';

// the offer object structure
// const intialOffer = {
//   investmentAmount: {
//     currency: string,
//     amount: number,
//   },
//   paybackPeriod: {
//     value: number,
//     unit: string,
//   },
//   annualIntersets: number,
//   recommandAnnualIntersets: number,
// };

const OfferSection = ({offer}) => {
  return (
    <View style={styles.offerContainer}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.offerItemTitle}>Investment Amount</Text>
          <View style={styles.offerValueContainer}>
            <Text style={styles.offerItemFirstValue}>
              {offer.investmentAmount.currency}
            </Text>
            <Text style={styles.offerItemSecondValue}>
              {offer.investmentAmount.amount}
            </Text>
          </View>
        </View>
        <View style={{marginLeft: metrics.screenWidth * 0.09}}>
          <Text style={styles.offerItemTitle}>Payback Period</Text>
          <View style={styles.offerValueContainer}>
            <Text style={styles.offerItemSecondValue}>
              {offer.paybackPeriod.value}
            </Text>
            <Text style={styles.offerItemFirstValue}>
              {offer.paybackPeriod.unit}
            </Text>
          </View>
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <Text style={styles.offerItemTitle}>Annual Intersets</Text>
        <Text style={styles.recommandedRateText}>
          Recommanded Interset Rate:
          {offer.recommandAnnualIntersets}%
        </Text>
        <View style={styles.offerValueContainer}>
          <Text style={styles.offerItemSecondValue}>
            {offer.annualIntersets}
          </Text>
          <Text style={styles.offerItemFirstValue}>%</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={colors.buttonGradient}
          style={[styles.progressValue, {width: offer.annualIntersets + '%'}]}
        />
        <View style={styles.progressCircle} />
      </View>
      <View style={styles.limitContainer}>
        <Text style={styles.recommandedRateText}>0%</Text>
        <Text style={styles.recommandedRateText}>100%</Text>
      </View>
      <View style={styles.seperator} />
      <Button title={'Dismiss'} titleColor={colors.red} />
      <View style={styles.seperator1} />
      <ButtonGradient title={'Make Offer'} titleColor={colors.white} />
    </View>
  );
};

export {OfferSection};

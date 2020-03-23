import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Image,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {images, metrics, colors} from '../../themes';
import {Avatar} from '../../components/avatar';
import {HeaderWithBack} from '../../components/header';
import {LoanRequestDetailsFinancialCard} from '../../components/card';
import {styles} from './loanRequestDetails.styles';
import {Button, ButtonGradient} from '../../components/button';
const LoanRequestDetails = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        style={{backgroundColor: colors.lighterGray}}
      />
      <SafeAreaView>
        <View style={styles.paddingHorizontal}>
          <HeaderWithBack />
          <View style={styles.userSectionContainer}>
            <View style={styles.avatarContainer}>
              <Avatar />
            </View>
            <View style={styles.lenmeScoreContainer}>
              <Text style={styles.userName}>IO</Text>
              <View style={styles.lenmeScorePart}>
                <Text style={styles.lenmeScoreText}>LENME SCORE</Text>
                <View style={styles.lenmeScoreValueContainer}>
                  <Image
                    style={{width: 20}}
                    resizeMode="contain"
                    source={images.lenmeScore}
                  />
                  <Text style={styles.lenmeScoreValue}>70</Text>
                  <Image
                    style={{width: 20}}
                    resizeMode="contain"
                    source={images.more}
                  />
                </View>
                <Text style={styles.vantageScoreText}>Vantage Score 4.0</Text>
              </View>
            </View>
            <View style={{flex: 6}}>
              <View style={{flex: 8}} />
              <View style={{flex: 14}}>
                <Text style={styles.lenmeScoreText}>CREDIT SCORE</Text>
                <View
                  style={[styles.lenmeScoreValueContainer, {marginTop: -10}]}>
                  <Image
                    style={{width: 20}}
                    resizeMode="contain"
                    source={images.creditScore}
                  />
                  <Text style={styles.lenmeScoreValue}>500-630</Text>
                  <Image
                    style={{width: 20}}
                    resizeMode="contain"
                    source={images.more}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{height: metrics.screenHeight * 0.3}}>
            <View style={[styles.loanFinanCardRow]}>
              <LoanRequestDetailsFinancialCard
                barColor={colors.green}
                title={'PAYMENT HISTORY'}
                value={'2'}
              />
              <LoanRequestDetailsFinancialCard
                barColor={colors.green}
                title={'CREDIT UTILIZATION'}
                value={'100%'}
              />
            </View>
            <View style={styles.loanFinanCardRow}>
              <LoanRequestDetailsFinancialCard
                barColor={colors.green}
                title={'PAYMENT HISTORY'}
                value={'2'}
              />
              <LoanRequestDetailsFinancialCard
                barColor={colors.green}
                title={'CREDIT UTILIZATION'}
                value={'100%'}
              />
            </View>
            <View style={styles.loanFinanCardRow}>
              <LoanRequestDetailsFinancialCard
                barColor={colors.green}
                title={'PAYMENT HISTORY'}
                value={'2'}
              />
              <LoanRequestDetailsFinancialCard
                barColor={colors.green}
                title={'CREDIT UTILIZATION'}
                value={'100%'}
              />
            </View>
          </View>
        </View>
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
          <View style={{height: 15}} />
          <Button title={'Dismiss'} titleColor={colors.red} />
          <View style={{height: 15}} />
          <ButtonGradient title={'Make Offer'} titleColor={colors.white} />
        </View>
      </SafeAreaView>
    </>
  );
};

export {LoanRequestDetails};

import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {colors} from '../../themes';
import {HeaderWithBack} from '../../components/header';
import {styles} from './styles';
import {CreditSection} from './creditScoreSection';
import {FinancialSection} from './financialSection';
import {OfferSection} from './OfferSection';

const LoanRequestDetails = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.lighterGray} />
      <SafeAreaView>
        <View style={styles.paddingHorizontal}>
          <HeaderWithBack />
          <CreditSection />
          <FinancialSection />
        </View>
        <OfferSection />
      </SafeAreaView>
    </>
  );
};

export {LoanRequestDetails};

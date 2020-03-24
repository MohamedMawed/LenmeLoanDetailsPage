import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {colors, images} from '../../themes';
import {HeaderWithBack} from '../../components/header';
import {styles} from './styles';
import {CreditSection} from './creditScoreSection';
import {FinancialSection} from './financialSection';
import {OfferSection} from './OfferSection';

const intialCredit = {
  user: {
    name: 'IO',
    avatar: images.profile,
  },
  lenmeScore: {
    credit: 70,
    vantage: 4.2,
  },
  creditScore: {
    from: 500,
    to: 630,
  },
};

const intialFinancial = {
  paymentHistory: '1 yr 5 mon',
  creitUtilization: '100%',
  totalAccounts: '2',
  totalAccounts1: '11%',
  annualIncome: '$53,000/yr',
  derogatoryMarks: '3',
};

const intialOffer = {
  investmentAmount: {
    currency: '$',
    amount: '970',
  },
  paybackPeriod: {
    value: 1,
    unit: 'month',
  },
  annualIntersets: '30',
  recommandAnnualIntersets: '3',
};

const LoanRequestDetails = ({navigation}) => {
  const credit = navigation ? navigation.params.credit : intialCredit;
  const financial = navigation ? navigation.params.financial : intialFinancial;
  const offer = navigation ? navigation.params.offer : intialOffer;
  return (
    <>
      <StatusBar backgroundColor={colors.lighterGray} />
      <SafeAreaView style={{backgroundColor: colors.lighterGray}}>
        <View style={styles.paddingHorizontal}>
          <HeaderWithBack />
          <CreditSection credit={credit} />
          <FinancialSection financial={financial} />
        </View>
        <OfferSection offer={offer} />
      </SafeAreaView>
    </>
  );
};

export {LoanRequestDetails};

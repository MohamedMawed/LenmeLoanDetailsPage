import React from 'react';
import {styles} from './styles';
import {LoanRequestDetailsFinancialCard} from '../../components/card';
import {View} from 'react-native';
import {colors, metrics} from '../../themes';

const FinancialSection = () => {
  return (
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
  );
};

export {FinancialSection};

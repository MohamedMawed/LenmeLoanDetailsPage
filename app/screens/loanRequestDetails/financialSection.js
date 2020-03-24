import React from 'react';
import {styles} from './styles';
import {LoanRequestDetailsFinancialCard} from '../../components/card';
import {View} from 'react-native';
import {colors, metrics} from '../../themes';

// the financial object structure
// const intialFinancial = {
//   paymentHistory: string,
//   creitUtilization: string,
//   totalAccounts: string,
//   totalAccounts1: string,
//   annualIncome: string,
//   derogatoryMarks: string,
// };

const FinancialSection = ({financial}) => {
  return (
    <View style={{height: metrics.screenHeight * 0.3}}>
      <View style={[styles.loanFinanCardRow]}>
        <LoanRequestDetailsFinancialCard
          barColor={colors.green}
          title={'PAYMENT HISTORY'}
          value={financial.paymentHistory}
        />
        <LoanRequestDetailsFinancialCard
          barColor={colors.green}
          title={'CREDIT UTILIZATION'}
          value={financial.creitUtilization}
        />
      </View>
      <View style={styles.loanFinanCardRow}>
        <LoanRequestDetailsFinancialCard
          barColor={colors.orange}
          title={'PAYMENT HISTORY'}
          value={financial.totalAccounts}
        />
        <LoanRequestDetailsFinancialCard
          barColor={colors.orange}
          title={'CREDIT UTILIZATION'}
          value={financial.totalAccounts1}
        />
      </View>
      <View style={styles.loanFinanCardRow}>
        <LoanRequestDetailsFinancialCard
          barColor={colors.orange}
          title={'PAYMENT HISTORY'}
          value={financial.annualIncome}
        />
        <LoanRequestDetailsFinancialCard
          barColor={colors.orange}
          title={'CREDIT UTILIZATION'}
          value={financial.derogatoryMarks}
        />
      </View>
    </View>
  );
};

export {FinancialSection};

import React from 'react';
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native';
import {fonts} from '../../themes';

const LoanRequestDetails = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text
            style={{
              fontFamily: fonts.type.heavy,
            }}>
            Hi Mawed Welcome to the test app
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export {LoanRequestDetails};

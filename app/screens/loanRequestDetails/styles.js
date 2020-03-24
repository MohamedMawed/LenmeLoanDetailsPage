import {StyleSheet} from 'react-native';
import {metrics, fonts, colors} from '../../themes';

const styles = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: 30,
    backgroundColor: colors.lighterGray,
  },
  userSectionContainer: {
    flexDirection: 'row',
    height: metrics.screenHeight * 0.13,
  },
  avatarContainer: {
    flex: 4.3,
    height: '100%',
  },
  lenmeScoreContainer: {
    flex: 5,
    paddingLeft: 10,
  },
  userName: {
    flex: 8,
    fontSize: fonts.size.h4,
    fontFamily: fonts.type.heavy,
  },
  lenmeScorePart: {
    flex: 14,
  },
  lenmeScoreText: {
    fontFamily: fonts.type.roman,
    fontSize: fonts.size.medium,
    color: colors.lightGray,
  },
  lenmeScoreValueContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginVertical: -8,
  },
  lenmeScoreValue: {
    marginHorizontal: 5,
    fontFamily: fonts.type.roman,
    fontSize: fonts.size.h4,
    color: colors.black,
  },
  vantageScoreText: {
    fontFamily: fonts.type.roman,
    fontSize: fonts.size.medium,
    color: colors.lightGray,
  },
  loanFinanCardRow: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  offerContainer: {
    height: metrics.screenHeight * 0.6,
    backgroundColor: colors.white,
    paddingLeft: 30,
    paddingTop: 15,
  },
  offerItemTitle: {
    fontSize: fonts.size.input,
    color: colors.purple,
  },
  offerItemFirstValue: {
    fontSize: fonts.size.h4,
    paddingHorizontal: 2,
  },
  offerItemSecondValue: {
    fontSize: fonts.size.h2,
  },
  offerValueContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  recommandedRateText: {
    fontSize: fonts.size.input,
    marginTop: 3,
    color: colors.lightGray,
  },
  progressContainer: {
    marginTop: 10,
    height: 8,
    borderRadius: 5,
    width: metrics.screenWidth - 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.mediumGray,
  },
  progressValue: {
    borderRadius: 5,
    width: '50%',
    height: '100%',
  },
  progressCircle: {
    width: 25,
    height: 25,
    backgroundColor: colors.white,
    borderRadius: 12.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export {styles};

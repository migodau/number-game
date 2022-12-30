import { StyleSheet, Text, Dimensions } from 'react-native';
import { COLORS } from '../../theme/colors';

export default Title = ({children }) => {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth > 380 ? 28 : 24,
    color: COLORS.text700,
    paddingVertical: 8,
  },
  // level1: {
  //   fontSize: 28,
  // }

})
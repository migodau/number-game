import { StyleSheet, Text, Dimensions } from 'react-native';
import { COLORS } from '../../theme/colors';

export default Subtitle = ({children }) => {
  return (
    <Text style={styles.subtitle}>{children}</Text>
  );
}


const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth > 380 ? 22 : 20,
    color: COLORS.text700,
    paddingBottom: 8,
    paddingTop: 16,
  },
  // level1: {
  //   fontSize: 28,
  // }

})
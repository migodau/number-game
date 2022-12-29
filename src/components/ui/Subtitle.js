import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../theme/colors';

export default Subtitle = ({children }) => {
  return (
    <Text style={styles.subtitle}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 22,
    color: COLORS.text700,
    fontWeight: 'bold',
    paddingBottom: 8,
    paddingTop: 16,
  },
  // level1: {
  //   fontSize: 28,
  // }

})
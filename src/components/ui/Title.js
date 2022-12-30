import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../theme/colors';

export default Title = ({children }) => {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 28,
    color: COLORS.text700,
    paddingVertical: 8,
  },
  // level1: {
  //   fontSize: 28,
  // }

})
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../../theme/colors';

export default NumberGuess = ({ children }) => {
  return (
    <View style={styles.guessContainer}>
      <Text style={styles.guessText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guessContainer: {
    borderWidth: 1,
    borderColor: COLORS.accent500,
    borderRadius: 12,
    backgroundColor: COLORS.accent300,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  guessText: {
    color: COLORS.text500,
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
  }
});
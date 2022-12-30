import { StyleSheet, View, Text } from 'react-native';

const ordinalNumber = (num) => {
  const j = num % 10;
  
  if (j === 1 && num !== 11) {
    return num + 'st';
  }

  if (j === 2 && num !== 12) {
    return num + 'nd';
  }
  if (j === 3 && num !== 13) {
    return num + 'rd';
  }
  return num + 'th';
}

export default GuessLogItem = ({round, value}) => {
  return (
    <View style={styles.roundItem}>
      <Text style={styles.roundText}>Cat's {ordinalNumber(round)} guess was {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  roundItem: {
    backgroundColor: '#fff',
    opacity: 0.8,
    borderRadius: 12,
    padding: 6,
    marginVertical: 4,
  },
  roundText: {
    fontFamily: 'open-sans'
  },
});
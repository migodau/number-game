import { StyleSheet, View, Text } from 'react-native'
import { COLORS } from '../../theme/colors';

export default Card = ({ children }) => {
  return (
    // <Text>{ children }</Text>
    <View style={styles.card}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: COLORS.background500,
    marginHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 4, // shadow for android (android-only prop)

    // shadow for iOS (iOS-only props)
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
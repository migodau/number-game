import { StyleSheet, View, Text } from 'react-native'
import Button from '../components/ui/Button'
import Title from '../components/ui/Title'
import { COLORS } from '../theme/colors'

export default GameOver = ({ onRestartGame }) => {
  return (
    <View style={styles.container}>
      <View style={styles.gameOverContainer}>
        <View style={styles.textContainer}>
          <Title>✨ Yay!! ✨</Title>
          <Text>Thank you for playing!</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button type="primary" onPress={onRestartGame}>Play again</Button>
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 110,
    alignItems: 'stretch',
  },
  gameOverContainer: {
    backgroundColor: COLORS.background700,
    paddingVertical: 24,
    marginHorizontal: 24,
    borderRadius: 12,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center'
  },
  buttonWrapper: {
    alignItems: 'stretch',
    paddingTop: 16,
    marginHorizontal: 24,
  }
})
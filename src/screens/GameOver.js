import { StyleSheet, View, Text, Image } from 'react-native'
import Button from '../components/ui/Button'
import Title from '../components/ui/Title'
import { COLORS } from '../theme/colors'

export default GameOver = ({ guessedNumber, onRestartGame }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.gameOverContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require('../assets/images/welldone_cat.jpg')} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Title>✨ Yay!! ✨</Title>
          <Text>The number is {guessedNumber}!!</Text>
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
  imageContainer: {
    alignItems: 'center',
  },
  imageWrapper: {
    width: 150,
    height: 150,
    overflow: 'hidden',
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gameOverContainer: {
    backgroundColor: '#fff',
    borderColor: COLORS.background500,
    borderWidth: 10,
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
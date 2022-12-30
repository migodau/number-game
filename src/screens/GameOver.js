import { StyleSheet, View, Text, Image } from 'react-native'
import Button from '../components/ui/Button'
import Title from '../components/ui/Title'
import { COLORS } from '../theme/colors'

export default GameOver = ({ guessedNumber, rounds, onRestartGame }) => {
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
          <Text style={styles.summaryText}>
            The number is <Text style={styles.highlight}>{guessedNumber}</Text>!!
          </Text>
          <Text style={styles.summaryText}>
            The cat needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess your number
          </Text>
          <Text style={styles.thankyouText}>Thank you for playing!</Text>
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
    width: 160,
    height: 160,
    overflow: 'hidden',
    borderRadius: 80,
    padding: 8,
    backgroundColor: '#fff' 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gameOverContainer: {
    backgroundColor: COLORS.background300,
    // borderColor: COLORS.background500,
    // borderWidth: 10,
    paddingVertical: 24,
    marginHorizontal: 24,
    borderRadius: 12,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 16,
    marginBottom: 8,
  },
  thankyouText: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    marginBottom: 8,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
  },
  buttonWrapper: {
    alignItems: 'stretch',
    paddingTop: 16,
    marginHorizontal: 24,
  }
})
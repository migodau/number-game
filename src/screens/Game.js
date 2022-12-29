import { useState } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import DirectionButtons from '../components/game/DirectionButtons';
import NumberGuess from '../components/game/NumberGuess';
import Button from '../components/ui/Button';
import Subtitle from '../components/ui/Subtitle';
import Title from '../components/ui/Title';

// the function excludes both min and max values
const generateRandomBetween = (min, max) => {
  min = min + 1;
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
    return rndNum;
}

let min = 0;
let max = 100;
const initialGuess = generateRandomBetween(min,max);

export default Game = ({ onRestartGame, onRightGuess }) => {
  const [guess, setGuess] = useState(initialGuess);

  const resetBondary = (wrongDirection) => {
    if (wrongDirection === 'lower') {
      max = 100;
      return;
    }
    min = 0;
  }

  const guessAgain = (direction) => { // tip = 'lower' | 'higher'
    console.log({min, max, guess});
    if (
      (direction === 'higher' && guess + 1 === max) ||
      (direction === 'lower' && guess - 1 === min)) {
      Alert.alert(
        "Something is wrong...", 
        "That is not possible. Make sure you provide true directions.",
        [{ text: "Sorry!", style: 'cancel', onPress: resetBondary.bind(this, direction)}]
      )
      return;
    }
    if (direction === 'lower') {
      max = guess;
      setGuess(current => generateRandomBetween(min, current));
      return;
    }
    min = guess;
    setGuess(current => generateRandomBetween(current, max));
  }

  return (
    <View style={styles.formContainer} >
      <Title>Cat's Guess is</Title>
      <NumberGuess>{guess}</NumberGuess>
      <Subtitle>Higher or Lower?</Subtitle>
      <DirectionButtons onPress={guessAgain}/>
      <Button type="success" onPress={onRightGuess}>You got it! That's right!</Button>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
      <Button type="danger" onPress={onRestartGame}>Restart</Button>
    
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 24,
    marginTop: 70,
  },
})
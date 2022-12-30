import { useEffect, useState } from 'react'
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

const resetBondaries = () => {
  min = 0;
  max = 100;
}

let min = 0;
let max = 100;

const initialGuess = generateRandomBetween(min,max);

export default Game = ({ choosenNumber, onRestartGame, onRightGuess }) => {
  const [guess, setGuess] = useState(initialGuess);
  
  useEffect(() => {
    resetBondaries();
  }, []);

  useEffect(() => {
    if (guess !== choosenNumber) {
      return;
    }

    setTimeout(onRightGuess, 1000);

  }, [guess])

  const guessAgain = (direction) => { // tip = 'lower' | 'higher'
    if (
      (direction === 'higher' && choosenNumber < guess ) ||
      (direction === 'lower' && choosenNumber > guess)) {
      Alert.alert(
        "Something is not right...", 
        "Hey! You should not lie! 😠",
        [{ text: "Sorry!", style: 'cancel', onPress: resetBondaries}]
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
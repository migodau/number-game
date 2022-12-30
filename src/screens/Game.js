import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Alert, FlatList } from 'react-native'
import DirectionButtons from '../components/game/DirectionButtons';
import GuessLogItem from '../components/game/GuessLogItem';
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

export default Game = ({ choosenNumber, onRestartGame, onGameOver }) => {
  const [guess, setGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds ] = useState([initialGuess]);
  
  useEffect(() => {
    resetBondaries();

  }, []);

  useEffect(() => {
    if (guess !== choosenNumber) {
      return;
    }

    setTimeout(onGameOver.bind(this, guessRounds.length), 500);

  }, [guess])

  const guessAgain = (direction) => { // tip = 'lower' | 'higher'
    if (
      (direction === 'higher' && choosenNumber < guess ) ||
      (direction === 'lower' && choosenNumber > guess)) {
      Alert.alert(
        "Something is not right...", 
        "Hey! You should not lie! 😠",
        [{ text: "Sorry!", style: 'cancel'}]
      )
      return;
    }
    if (direction === 'lower') {
      max = guess;
    } else {
      min = guess;
    }
    const newGuess = generateRandomBetween(min, max);
    setGuess(newGuess);
    setGuessRounds(current => [ ...current, newGuess ]);
  }

  return (
    <View style={styles.formContainer} >
      <Title>Cat's Guess is</Title>
      <NumberGuess>{guess}</NumberGuess>
      <Subtitle>Higher or Lower?</Subtitle>
      <DirectionButtons onPress={guessAgain}/>

      <View style={styles.rounds}>
        <Subtitle>Guess Round Logs</Subtitle>
        <FlatList 
          data={guessRounds} 
          renderItem={({ item, index }) => <GuessLogItem value={item} round={index + 1} />}
          keyExtractor={(_, index) => index}
        />
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
  rounds: {
    marginVertical: 16,
    flex: 1,
  },
})
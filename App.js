import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGame from './src/screens/StartGame';
import { COLORS } from './src/theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Game from './src/screens/Game';
import GameOver from './src/screens/GameOver';

export default function App() {

  const [number, setNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const handlePickNumber = (num) => {
    setNumber(num);
  }

  const handleRightGuess = () => {
    console.log('Game Over!');
    setGameOver(true);
  }

  const handleGameRestart = () => {
    setGameOver(false);
    setNumber(null);
  }

  let screen = <StartGame onPickNumber={handlePickNumber} />

  if(number) {
    screen = <Game onRestartGame={handleGameRestart} onRightGuess={handleRightGuess}/>;
  }

  if (gameOver) {
    screen = <GameOver onRestartGame={handleGameRestart}/>
  }

  return (
    <LinearGradient colors={[COLORS.background300, '#ffffff']} style={styles.flexFull}>
      <ImageBackground 
        source={require('./src/assets/bigeyes_cat.jpg')}
        resizeMode="cover"
        style={styles.flexFull}
        imageStyle={styles.imgBackground}>
        <SafeAreaView style={styles.flexFull}>
          {screen}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flexFull: {
    flex:1,
  },
  imgBackground: {
    opacity: .7,
  }
});


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGame from './src/screens/StartGame';
import { COLORS } from './src/theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Game from './src/screens/Game';
import GameOver from './src/screens/GameOver';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [number, setNumber] = useState(null);
  const [rounds, setRounds] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [fontLoaded] = useFonts({
    'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontLoaded) {
    return <AppLoading/>
  }

  const handlePickNumber = (num) => {
    setNumber(num);
  }

  const handleGameOver = (rounds) => {
    console.log('Game Over!');
    setGameOver(true);
    setRounds(rounds);
  }

  const handleGameRestart = () => {
    setGameOver(false);
    setNumber(null);
    setRounds(0);
  }

  let screen = <StartGame onPickNumber={handlePickNumber} />

  if(number) {
    screen = <Game choosenNumber={number} onRestartGame={handleGameRestart} onGameOver={handleGameOver}/>;
  }

  if (gameOver) {
    screen = <GameOver guessedNumber={number} rounds={rounds} onRestartGame={handleGameRestart}/>
  }

  return (
    <LinearGradient colors={[COLORS.background300, '#ffffff']} style={styles.flexFull}>
      <ImageBackground 
        source={require('./src/assets/images/bigeyes_cat.jpg')}
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


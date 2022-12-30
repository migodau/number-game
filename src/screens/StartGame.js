import { useState } from 'react'
import { Alert, StyleSheet, TextInput, View, Text, useWindowDimensions } from 'react-native'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Title from '../components/ui/Title'
import { COLORS } from '../theme/colors'

export default StartGame = ({ onPickNumber }) => {

  // to respond to rotation dinamically
  const { width, height } = useWindowDimensions();
  const marginTop = height < 400 ? 40 : 100;

  const [number, setNumber] = useState('');

  const resetInput = () => {
    setNumber('');
  }

  const confirmInput  = () => {
    const chosenNum = parseInt(number);
    
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert(
        'Invalid number', // title
        'Number must be something between 1 and 99', // message
        [{ text: 'Ok', style: 'destructive', onPress: resetInput}] // buttons
      )
      return;
    }
    onPickNumber(chosenNum);
  }

  return (
    <View style={[styles.container, { marginTop }]}>
      <Title>Let's play!</Title>
      <Card>
        <Text>Choose a number</Text>
        <TextInput 
          maxLength={2}
          keyboardType='number-pad'
          style={styles.textInput} 
          value={number} 
          onChangeText={(n) => setNumber(n)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <Button type="danger" onPress={resetInput}>Reset</Button>
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={confirmInput}>Confirm</Button>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 100,
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    fontSize: 32,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary500,
    color: COLORS.text700,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 100,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 1,
  }
})
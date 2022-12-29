import { StyleSheet, View } from 'react-native'
import Button from '../ui/Button';

export default DirectionButtons = ({ onPress }) => {
  
  return (
    <View style={styles.directionButtons}>
      <View style={styles.buttonWrapper}>
        <Button onPress={onPress.bind(this, 'higher')}>Higher</Button>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={onPress.bind(this, 'lower')}>Lower</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  directionButtons: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 1,
  }
});
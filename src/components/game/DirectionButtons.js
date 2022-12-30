import { StyleSheet, View } from 'react-native'
import Button from '../ui/Button';
import { Ionicons } from '@expo/vector-icons'

export default DirectionButtons = ({ onPress }) => {
  
  return (
    <View style={styles.directionButtons}>
      <View style={styles.buttonWrapper}>
        <Button onPress={onPress.bind(this, 'higher')}>
          <Ionicons name='md-add' size={22} />
        </Button>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={onPress.bind(this, 'lower')}>
        <Ionicons name='md-remove' size={22} />
        </Button>
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
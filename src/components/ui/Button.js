import { Pressable, StyleSheet, View, Text } from 'react-native'
import { COLORS } from '../../theme/colors';

export default Game = ({children, type, onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button, styles[type || 'primary']]}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  button: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: COLORS.primary500,
  },
  accent: {
    backgroundColor: COLORS.accent500,
  },
  danger: {
    backgroundColor: COLORS.danger500,
  },
  success: {
    backgroundColor: COLORS.success500,
  },
  pressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#fff',
  }
});
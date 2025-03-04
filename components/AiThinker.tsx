import { StyleSheet, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface AiThinkerProps {
  show: boolean;
}
export function AiThinker({ show }: AiThinkerProps) {
  return (
    <View style={styles.container}>
      {show && <FontAwesome5 name='brain' size={24} color='black' />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  },
});

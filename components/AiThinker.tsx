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
    height: 30,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    fontSize: 30,
    paddingLeft: 10,
  },
});

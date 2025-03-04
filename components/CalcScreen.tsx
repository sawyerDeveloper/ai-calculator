import { StyleSheet, Text, View } from 'react-native';

interface CalcScreenProps {
  value: [number | string];
}
export function CalcScreen({
  value
}: CalcScreenProps) {
  return (
    <View style={styles.container}>
      <Text>{value.map(digit => digit)}</Text>
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

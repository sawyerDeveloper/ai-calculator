import { StyleSheet, Text, View } from 'react-native';
import { AiThinker } from './AiThinker';
import { useState } from 'react';

interface CalcScreenProps {
  value: [number | string];
  loading: boolean;
}
export function CalcScreen({ value, loading }: CalcScreenProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <View style={styles.container}>
      <Text>{value.map((digit) => digit)}</Text>
      {loading && !showAnswer && (
        <AiThinker aiCallback={() => setShowAnswer(true)} aiModel={value} />
      )}
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

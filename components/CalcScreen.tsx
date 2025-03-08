import { StyleSheet, Text, View } from 'react-native';
import { AiThinker } from './AiThinker';
import { useState } from 'react';

interface CalcScreenProps {
  value: [number | string];
  loading: boolean;
}

export function CalcScreen({ value, loading }: CalcScreenProps) {
  const [showAnswer, setShowAnswer] = useState(loading);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{value.map((digit) => digit)}</Text>
      {loading && !showAnswer && (
        <AiThinker aiCallback={() => setShowAnswer(true)} aiModel={value} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1.5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  label: {
    fontSize: 30,
  },
});

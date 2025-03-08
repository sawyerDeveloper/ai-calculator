import {
  StyleSheet,
  Text,
  Pressable,
  ColorValue,
} from 'react-native';

interface CalcButtonProps {
  value: number | string;
  label: string;
  action: (calcValue: number | string) => void;
  backgroundColor?: ColorValue;
}

export function CalcButton({
  value,
  label,
  action,
  backgroundColor,
}: CalcButtonProps) {
  return (
    <Pressable
      onPress={() => action(value)}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.label, {fontSize: isNaN(value as number) ? 30 : 25}]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 1,
    cursor: 'pointer',
    fontSize: 20
  },
  label: {
    fontWeight: '600' 
  }
});

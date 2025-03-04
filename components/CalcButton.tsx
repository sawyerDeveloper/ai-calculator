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
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <Text>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    cursor: 'pointer',
  },
});

import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { CalcScreen } from './CalcScreen';
import AIModel from '../ai/AIModel';
import CalcControls from './CalcControls';

export function Calculator() {
  const [currentCommand, setCurrentCommand] = useState<[string | number]>([0]);
  const [loading, setLoading] = useState(false);
  const [aiModel] = useState(new AIModel());

  const addDigit = (digit: number) => {
    //  Don't add zeros
    if (digit === 0 && currentCommand[0] === 0) {
      return;
    }
    //  If value is at default(0), replace it with a digit
    if (currentCommand[0] === 0) {
      setCurrentCommand([digit]);
    } else {
      currentCommand.push(digit);
      setCurrentCommand([...currentCommand]);
    }
  };

  const addCommand = (command: string) => {
    switch (command) {
      case '=':
        setLoading(true);
        currentCommand.push(command);
        const result = aiModel.compute(currentCommand);
        currentCommand.push(result);
        setCurrentCommand([...currentCommand]);
        break;
      case 'AC':
        setCurrentCommand([0]);
        break;
      case 'C':
        //  Just remove the last digit or command
        currentCommand.splice(currentCommand.length - 1, 1);
        //  If its the last digit, set currentCommand zero, otherwise set it to the new shorter array
        if (currentCommand.length < 1 && currentCommand[0] !== 0) {
          setCurrentCommand([0]);
        } else {
          setCurrentCommand([...currentCommand]);
        }
        break;
      case '-/+':
        if (currentCommand[0] === '-') {
          currentCommand.shift();
        } else {
          currentCommand.unshift('-');
        }
        setCurrentCommand([...currentCommand]);
        break;
      default:
        //  Only 1 command between digits
        if (!isNaN(currentCommand[currentCommand.length - 1] as number)) {
          currentCommand.push(command);
          setCurrentCommand([...currentCommand]);
        }
    }
  };

  const pressCalcButton = (calcValue: number | string) => {
    if (!isNaN(calcValue as number)) {
      addDigit(calcValue as number);
    } else {
      addCommand(calcValue as string);
    }
  };

  return (
    <View style={styles.container}>
      <CalcScreen loading={loading} value={currentCommand} />
      <CalcControls pressCalcButton={pressCalcButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    maxWidth: 500,
  }
});

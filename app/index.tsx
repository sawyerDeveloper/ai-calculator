import { CalcButton } from '@/components/CalcButton';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [currentCommand, setCurrentCommand] = useState<[string | number]>([0]);

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
      case 'Clear':
        setCurrentCommand([0]);
        break;
      case '+':
        setCurrentCommand(currentCommand);
      default:
        setCurrentCommand(currentCommand);
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
      <View>
        <Text>Calculator</Text>
        <View>
          <View style={styles.answer}>
            <Text>{currentCommand}</Text>
          </View>
          <View style={styles.column}>
            <View style={styles.row}>
              <CalcButton label='1' value={1} action={pressCalcButton} />
              <CalcButton label='2' value={2} action={pressCalcButton} />
              <CalcButton label='3' value={3} action={pressCalcButton} />
              <CalcButton
                label='+'
                value={'+'}
                action={pressCalcButton}
                backgroundColor='lightgrey'
              />
            </View>
            <View style={styles.row}>
              <CalcButton label='4' value={4} action={pressCalcButton} />
              <CalcButton label='5' value={5} action={pressCalcButton} />
              <CalcButton label='6' value={6} action={pressCalcButton} />
              <CalcButton
                label='-'
                value={'-'}
                action={pressCalcButton}
                backgroundColor='lightgrey'
              />
            </View>
            <View style={styles.row}>
              <CalcButton label='7' value={7} action={pressCalcButton} />
              <CalcButton label='8' value={8} action={pressCalcButton} />
              <CalcButton label='9' value={9} action={pressCalcButton} />
              <CalcButton
                label='x'
                value={'x'}
                action={pressCalcButton}
                backgroundColor='lightgrey'
              />
            </View>
            <View style={styles.row}>
              <CalcButton label='.' value={0.1} action={pressCalcButton} />
              <CalcButton label='0' value={0} action={pressCalcButton} />
              <CalcButton
                label='Clear'
                value={'Clear'}
                action={pressCalcButton}
                backgroundColor='grey'
              />
              <CalcButton
                label='/'
                value={'/'}
                action={pressCalcButton}
                backgroundColor='lightgrey'
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto-Medium',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  answer: {
    height: 30,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    fontSize: 30,
    paddingLeft: 10,
  },
});

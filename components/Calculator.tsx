import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { CalcScreen } from './CalcScreen';
import { CalcButton } from './CalcButton';
import AIModel from '../ai/AIModel';

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
      <Text style={styles.header}>Calculator</Text>
      <CalcScreen loading={loading} value={currentCommand} />
      <View style={styles.controls}>
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
            <CalcButton label='-/+' value={'-/+'} action={pressCalcButton} />
            <CalcButton
              label='/'
              value={'/'}
              action={pressCalcButton}
              backgroundColor='lightgrey'
            />
          </View>
          <View style={styles.row}>
            <CalcButton
              label='C'
              value={'C'}
              action={pressCalcButton}
              backgroundColor='orange'
            />
            <CalcButton
              label='AC'
              value={'AC'}
              action={pressCalcButton}
              backgroundColor={'firebrick'}
            />
            <CalcButton
              label='sqrt'
              value={'sqrt'}
              action={pressCalcButton}
              backgroundColor={'lightgrey'}
            />
            <CalcButton
              label='='
              value={'='}
              action={pressCalcButton}
              backgroundColor={'green'}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    maxWidth: 500
  },
  header:{
    fontSize: 40,
    paddingBottom: 10,
    fontWeight: '800'
  },
  controls: {
    width: '100%',
    height: '65%',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row',
    height: '20%',
    width:'25%'
  },
  column: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
});

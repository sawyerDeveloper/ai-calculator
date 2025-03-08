import { StyleSheet, View } from 'react-native';
import { CalcButton } from './CalcButton';

interface CalcControlsProps {
  pressCalcButton: (calcValue: number | string) => void;
}

export default function CalcControls({ pressCalcButton }: CalcControlsProps) {
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '65%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  row: {
    flexDirection: 'row',
    height: '20%',
    width: '25%',
  },
  column: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});

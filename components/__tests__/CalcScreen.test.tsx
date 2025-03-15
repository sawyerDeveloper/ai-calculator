import { render } from '@testing-library/react-native';
import { CalcScreen } from '../CalcScreen';

describe('CalcScreen', () => {
  it('renders correctly', () => {
    const calcScreen = render(
      <CalcScreen value={[1, '+', 1, '=', 2]} loading={false} />
    )
    expect(calcScreen.toJSON()).toMatchSnapshot();
    expect(calcScreen.findByText('1+1=2'))
  });
});

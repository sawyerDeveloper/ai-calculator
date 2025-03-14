import { render } from '@testing-library/react-native';
import CalcControls from '../CalcControls';

it('renders correctly', () => {
  const tree = render(
    <CalcControls pressCalcButton={() => {}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
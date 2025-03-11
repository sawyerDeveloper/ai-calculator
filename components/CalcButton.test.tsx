import renderer from 'react-test-renderer';
import { CalcButton } from './CalcButton';

it('renders correctly', () => {
  const tree = renderer
    .create(<CalcButton value="a" label="a" action={() => {}} backgroundColor="000000" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
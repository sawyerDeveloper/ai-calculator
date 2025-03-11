import renderer from 'react-test-renderer';
import CalcControls from './CalcControls';

it('renders correctly', () => {
  const tree = renderer
    .create(<CalcControls pressCalcButton={() => {}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
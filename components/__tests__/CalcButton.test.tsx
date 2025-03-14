import { render, screen } from '@testing-library/react-native';
import { CalcButton } from '../CalcButton';

describe('CalcButton', () => {
  it('renders correctly', () => {
    const tree = render(
      <CalcButton
        value='a'
        label='a'
        action={() => {}}
        backgroundColor='000000'
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a red background', () => {
    render(
      <CalcButton value='a' label='a' action={() => {}} backgroundColor='red' />
    );
    expect(screen.getByLabelText('Calculator Button')).toHaveStyle({
      backgroundColor: 'red',
    });
  });
});

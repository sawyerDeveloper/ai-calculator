import AIModel from './AIModel';
describe('AI Model Compute', () => {
  describe('Addition', () => {
    test('with single complete set of commands and digits', () => {
      const model = new AIModel();
      const result = model.compute([1, '+', 1, '=']);
      expect(result).toBe(2);
    });
    test('with single incomplete set of commands and digits', () => {
      const model = new AIModel();
      const result = model.compute([1, '+', '=']);
      expect(result).toBe(NaN);
    });
    test('with double complete set of commands and digits', () => {
      const model = new AIModel();
      const result = model.compute([1, '+', 1, '+', 1, '=']);
      expect(result).toBe(3);
    });
  });
  describe('Subtraction', () => {
    test('with single set of complete commands and digits', () => {
      const model = new AIModel();
      const result = model.compute([1, '-', 1, '=']);
      expect(result).toBe(0);
    });
    test('with double complete set of commands and digits', () => {
        const model = new AIModel();
        const result = model.compute([2, '-', 1, '-', 1, '=']);
        expect(result).toBe(0);
      });
  });
});

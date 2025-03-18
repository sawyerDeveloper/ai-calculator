import AIModel from '../AIModel';
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
    test('with single set of complete commands and digits and larger integer subtracting a smaller integer', () => {
      const model = new AIModel();
      const result = model.compute([1, '-', 2, '=']);
      expect(result).toBe(-1);
    });
  });
  describe('Multiplication', () => {
    test('with single complete set of commands and digits', () => {
      const model = new AIModel();
      const result = model.compute([3, 'x', 3, '=']);
      expect(result).toBe(9);
    });
  });
  describe('Division', () => {
    test('with single complete set of commands and digits', () => {
      const model = new AIModel();
      const result = model.compute([2, '/', 2, '=']);
      expect(result).toBe(1);
    });
  });
  describe('Square Root', () => {
    test('with single complete set of commands and digits', () => {
      const model = new AIModel();
      const result = model.compute([9, 'sqrt', '=']);
      expect(result).toBe(3);
    });
  });
  describe('Plus / Minus', () => {
    test('with single complete set of commands and digits', () => {
      const model = new AIModel();
      const result = model.compute(['-', '1', '+', 2, '=']);
      expect(result).toBe(1);
    });
  });
  describe('Mixed Commands', () => {
    test('with single set of mixed commands and digits', () => {
        const model = new AIModel();
        const result = model.compute([1, '+', 3, '-', 1, '=']);
        expect(result).toBe(3);
      });
    test('with complete set of all mixed commands and digits', () => {
      const model = new AIModel();
      const result = model.compute(['-', '1', '+', 3, 'x', 3, '/', 2, '-', 1, '=']);
      expect(result).toBe(2);
    });
  });
});

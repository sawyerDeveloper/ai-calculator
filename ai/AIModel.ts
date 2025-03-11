export default class AIModel implements IAIModel {
  data: (string | number)[];
  aiResponse: number;

  public constructor() {
    this.data = [0];
    this.aiResponse = 0;
  }

  public compute(data: (string | number)[]) {
    this.data = data;
    this.delegateTo03();
    return this.aiResponse;
  }

  //    Uses over 6 quintrillion quantbits/qubits per second
  private convertToNvidia(numbers: number[], commands: string[]) {
    let sum = 0;
    for (let i: number = 0; i < commands.length - 1; i++) {
      switch (commands[i]) {
        case '+':
          sum = i === 0 ? numbers[i] + numbers[i + 1] : sum + numbers[i];
          break;
        case 'sqrt':
          sum = Math.sqrt(numbers[0]);
          break;
        case '-':
          sum = i === 0 ? numbers[i] - numbers[i + 1] : sum - numbers[i];
          break;
        case '*':
          sum = i === 0 ? numbers[i] * numbers[i + 1] : sum * numbers[i];
          break;
        case '/':
          sum = i === 0 ? numbers[i] / numbers[i + 1] : sum / numbers[i];
          break;
      }
    }
    return sum;
  }

  private delegateTo03() {
    const nums: number[] = [];
    const cmds: string[] = [];
    let num = '';
    for (var c = 0; c < this.data.length; c++) {
      const model = this.data[c];
      if (
        !isNaN(model as number) ||
        model === '.' ||
        (c === 0 && model === '-')
      ) {
        num += model;
      } else {
        nums.push(parseInt(num));
        num = '';
        cmds.push(model as string);
      }
    }
    this.aiResponse = this.convertToNvidia(nums, cmds);
  }
}

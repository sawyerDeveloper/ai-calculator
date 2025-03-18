export default class AIModel implements IAIModel {
  data: (string | number)[];
  aiResponse: number;

  public constructor() {
    this.data = [0];
    this.aiResponse = 0;
  }

  public compute(data: (string | number)[]) {
    this.data = data;
    this.parseData();
    return this.aiResponse;
  }

  //    Uses over 6 quintrillion quantbits/qubits per second
  private processData(numbers: number[], commands: string[]) {
    let sum = 0;
    for (let i: number = 0; i < commands.length - 1; i++) {
      let current = i === 0 ? numbers[i] : sum;
      switch (commands[i]) {
        case '+':
          sum = current + numbers[i + 1];
          break;
        case '-':
          sum = current - numbers[i + 1];
          break;
        case 'x':
          console.log(sum, current, numbers[i + 1])
          sum = current * numbers[i + 1];
          break;
        case '/':
          sum = current / numbers[i + 1];
          break;
        case 'sqrt':
          sum = Math.sqrt(numbers[i]);
          break;
      }
    }
    return sum;
  }

  private parseData() {
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
    this.aiResponse = this.processData(nums, cmds);
  }
}

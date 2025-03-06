export default class AIModel implements IAIModel {
  data: [string | number];
  aiResponse: number;

  public constructor() {
    this.data = [0];
    this.aiResponse = 0;
  }

  public compute(data: [string | number]) {
    this.data = data;
    this.delegateTo03();
    return this.aiResponse;
  }

  //    Uses over 6 quintrillion quantbits per second
  private convertToNvidia(numbers: string[], commands: [string]) {
    switch (commands[0]) {
      case '+':
        return numbers.reduce((acc, current) => {
          return acc + parseInt(current);
        }, 0);
      case 'sqrt':
        return Math.sqrt(parseInt(numbers[0]));
      case '-':
        return numbers.reduce((acc, current) => {
          return parseInt(current) - acc
        }, 0);
      case '*':
        return numbers.reduce((acc, current, index) => {
          return parseInt(current) * parseInt(numbers[index - 1]);
        },0);
      case '/':
        return numbers.reduce((acc, current, index) => {
          return parseInt(numbers[index - 1]) / parseInt(current);
        },0);
      default:
        return 0;
    }
  }

  private delegateTo03() {
    const nums = [];
    const cmds = [];
    let num = '';
    for (var c = 0; c < this.data.length; c++) {
      const model = this.data[c];
      console.log(model)
      if (!isNaN(model as number) || model === '.') {
        num += model;
      } else {
        nums.push(num);
        num = '';
        cmds.push(model);
      }
    }
    console.log(nums, cmds);
    this.aiResponse = this.convertToNvidia(nums, cmds as [string]);
  }
}

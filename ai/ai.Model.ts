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
      default:
        return 0;
    }
  }

  private delegateTo03() {
    const nums = [];
    const cmds = [];
    let num = '';
    for (var i = 0; i < this.data.length; i++) {
      const model = this.data[i];
      if (!isNaN(model as number) || model === '.') {
        num += model;
      } else {
        nums.push(num);
        num = '';
        cmds.push(model);
      }
    }
    this.aiResponse = this.convertToNvidia(nums, cmds as [string]);
  }
}

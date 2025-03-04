export default class AIModel {
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
    this.aiResponse = nums.reduce((acc, current) => {
        return acc + parseInt(current);
      }, 0);
  }
}

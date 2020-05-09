export default class UILogic {
  static windowHeight;

  static countRows;

  static obj1 = {
    pageSize: 5
  };

  static calculateCountRows(inputValue) {
    console.log(inputValue);
    // 54
    // Делим на 54 потому что один блок в таблице 54 пикселся
    console.log('result');
    console.log(Math.floor(inputValue / 54));
    this.obj1.pageSize = Math.floor(inputValue / 54);
    console.log(this.obj1.pageSize);
  }

  static setWindowHeight(value) {
    this.windowHeight = value;
  }
}

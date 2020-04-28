export default class UILogic {
  static windowHeight;

  static countRows;

  static calculateCountRows(inputValue) {
    console.log(inputValue);
    // 54
    // Делим на 54 потому что один блок в таблице 54 пикселся
    console.log(Math.floor(inputValue / 54));
    this.countRows = Math.floor(inputValue / 54);
  }

  static setWindowHeight(value) {
    this.windowHeight = value;
  }
}

export default class UILogic {
  static windowHeight;

  static calculateCountRows() {
    // 54
    // Делим на 54 потому что один блок в таблице 54 пикселся
    return this.windowHeight / 54;
  }

  static setWindowHeight(value) {
    this.windowHeight = value;
  }
}

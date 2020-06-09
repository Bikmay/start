export default class Fetch {
  static fetch(nameData) {
    let temp;
    switch (nameData) {
      case 'orders_data':
        temp = JSON.parse('./data/test.json');
        return temp.orders;
      default:
        return null;
    }
  }
}

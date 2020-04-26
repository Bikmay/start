import Database from './Database';
import querys from './queryes.ts';

export default class OrdersData extends Database {
  static fetchData() {
    if (this.isConnect()) {
      this.pool.query(querys.ALL_ORDER, (err, res) => {
        return res;
      });
    }
  }

  static check() {
    this.pool.query('SELECT NOW()', (err, res) => {
      console.log(err, res);
      this.pool.end();
    });
  }
}

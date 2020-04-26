import Database from './Database';
import querys from './queryes.ts';

export default class ClientsData extends Database {
  static fetchData() {
    if (this.isConnect()) {
      this.pool.query(querys.ALL_CLIENTS, (err, res) => {
        return res;
      });
    }
  }
}

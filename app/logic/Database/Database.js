const { Client } = require('pg');

export default class Database {
  /* static client = new Client({
    user: 'diigkvpikohese',
    host: 'ec2-54-247-118-139.eu-west-1.compute.amazonaws.com',
    database: 'd4942nleq7in6v',
    password:
      'd63fc75a0c5568bf1452d2aeb21c361fc556de7d43590ab00016459d39b43ee5',
    port: 5432
  }); */

  static connect() {
    const client = new Client({
      user: 'diigkvpikohese',
      host: 'ec2-54-247-118-139.eu-west-1.compute.amazonaws.com',
      database: 'd4942nleq7in6v',
      password:
        'd63fc75a0c5568bf1452d2aeb21c361fc556de7d43590ab00016459d39b43ee5',
      port: 5432
    });

    client.connect(function(err, done) {
      if (err) {
        console.log(err);
      } else {
        client.query('SELECT NOW()', function(err, result) {
          done();
          if (err) {
            throw err;
          }
        });
      }
    });
  }
}

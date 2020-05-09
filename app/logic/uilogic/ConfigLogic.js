import fs from 'fs';

const parseJSON = require('parse-json-object-as-map');

export default class ConfigLogic {
  static getConfig() {
    const file = fs.readFileSync('./app/logic/uilogic/configs/ui.config.json');
    return JSON.parse(file);
  }

  // Orders
  static getTypeItems() {
    const types = this.getConfig().typeItems;
    const typesMap = [];
    for (let i = 0; i < types.length; i++) {
      typesMap.push({
        value: types[i],
        text: types[i]
      });
    }
    return typesMap;
  }

  static getTypeCurrency() {
    const currencyData = this.getConfig().currency;
    const currencyMap = [];
    for (let i = 0; i < currencyData.length; i++) {
      currencyMap.push({
        value: currencyData[i],
        text: currencyData[i]
      });
    }
    return currencyMap;
  }

  static getLang() {
    const langs = fs.readFileSync(
      './app/logic/uilogic/configs/config.lang.json'
    );
    console.log(parseJSON(langs));
    const resMap = parseJSON(langs);
    const res = [];
    console.log(resMap.rus);
    resMap.forEach(function(value, key) {
      res.push({
        value: key,
        text: value
      });
    });
    return res;
  }

  // Clients
  static getCountrys() {
    const countysList = this.getConfig().countrys;
    const countysMap = [];
    for (let i = 0; i < countysList.length; i++) {
      countysMap.push({
        value: countysList[i],
        text: countysList[i]
      });
    }
    return countysMap;
  }
}

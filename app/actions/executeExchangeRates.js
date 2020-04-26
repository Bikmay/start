const https = require('https');
const fs = require('fs');

export default function getExchangeRates() {
  const file = fs.createWriteStream('./file.xml');
  const request = https.get(
    'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml',
    function(response) {
      response.pipe(file);
    }
  );
}

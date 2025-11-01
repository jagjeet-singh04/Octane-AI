const CryptoJS = require('crypto-js');
const secret = 'OCTANE_AI_SECRET_SALT';
const samples = [
  'A3F8-9D1C-7E5B',
  'Z9X1-C3V4-B7N8',
  'CPU9MAC2HOST8',
  'ABCD-1234-EFGH',
  'WIN10-HP-ELITEBOOK'
];
const clean = (s) => s.toUpperCase().replace(/[^A-Z0-9]/g, '');
const gen = (temp) => {
  const raw = clean(temp);
  const hash = CryptoJS.SHA256(raw + secret).toString();
  const lic = hash.substring(0, 16).toUpperCase();
  return lic.match(/.{1,4}/g).join('-');
};
samples.forEach((s) => console.log(`${s} => ${gen(s)}`));

import fs from 'fs';
import path from 'path';
import { fetchXml } from './index';

fetchXml('http://at.alicdn.com/t/font_1373348_ghk94ooopqr.js').then((value) => {
  fs.writeFileSync(path.resolve('snapshot.json'), JSON.stringify(value, null, 4));
});

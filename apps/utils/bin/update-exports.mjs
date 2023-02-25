// update exports from package.json
// Usage: node update-exports.js

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pkg = JSON.parse(await fs.readFile(path.join(__dirname, '../package.json'), 'utf8'));

const exports = {
  '.': './index.js',
  './package.json': './package.json',
};

// scan src dir for files
const files = await fs.readdir(path.join(__dirname, '../src'), { withFileTypes: true });
for (const file of files) {
  if (file.isFile()) {
    const name = file.name.replace(/\.js$/, '');
    exports[`./${name}`] = `./src/${name}.js`
  }
}

// save new pacakge.json

pkg.exports = exports;
await fs.writeFile(path.join(__dirname, '../package.json'), JSON.stringify(pkg, null, 2), 'utf8');


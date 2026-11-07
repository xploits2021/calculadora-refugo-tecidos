// Copia o Chart.js do node_modules para www/vendor, para o app funcionar offline.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';

const origem = 'node_modules/chart.js/dist/chart.umd.js';
const destino = 'www/vendor/chart.umd.js';

if (!existsSync(origem)) {
  console.error(`Arquivo não encontrado: ${origem}. Rode "npm install" antes.`);
  process.exit(1);
}
mkdirSync('www/vendor', { recursive: true });
copyFileSync(origem, destino);
console.log(`Chart.js copiado para ${destino}`);

import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const mongoConectionStr = JSON.parse(await fs.promises.readFile(__dirname + '/mongodb.json', 'utf-8'))

export default mongoConectionStr 
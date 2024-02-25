import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const templateRoot = `${__dirname}/../templates`
export const htmxRoot = `${__dirname}/../../node_modules/htmx.org`
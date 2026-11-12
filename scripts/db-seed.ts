import { refuseUnsafeDatabase } from "./db-command.ts";

refuseUnsafeDatabase();
console.error(
  "NÃO EXECUTADO: o seed sintético entra com as tabelas da F03. Nada foi gravado.",
);
process.exit(2);

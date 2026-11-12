import { refuseUnsafeDatabase } from "./db-command.ts";

const target = refuseUnsafeDatabase();
console.error(
  `NÃO EXECUTADO: ainda não há migração de domínio para aplicar em ${target.url}. A primeira migração entra na F03.`,
);
process.exit(2);

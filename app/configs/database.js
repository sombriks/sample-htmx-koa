import Knex from "knex"

export const db = (config = {
  useNullAsDefault: true,
  connection: './todo.db',
  client: 'sqlite3',
}) => Knex(config)

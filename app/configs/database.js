import Knex from "knex"

/**
 * create knex instance
 *
 * @param {Knex.Knex.Config} config
 * @returns {Knex.Knex}
 */
export const db = (config = {
  useNullAsDefault: true,
  connection: './todo.db',
  client: 'sqlite3',
}) => Knex(config)

/**
 * make sure the todo database is ready for use
 *
 * @param {Knex.Knex} database
 * @returns {Promise} a promise which fulfils when the database is ready
 */
export const initdb = async (database) => database.raw(`
  create table if not exists todos(
    id integer primary key autoincrement,
    description text not null,
    done boolean default false,
    created timestamp default CURRENT_TIMESTAMP
  );
`)

export const testSeed = async (database) => database.raw(`
  insert into todos (done, description) values (true,'laundry');
  insert into todos (done, description) values (false,'lunch');
  insert into todos (done, description) values (false,'exercise');
`)

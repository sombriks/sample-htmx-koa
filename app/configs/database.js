import Knex from "knex"
import { logger } from "./logging.js"

const env = process.env.NODE_ENV || "production"

const cfg = {
  test: {
    useNullAsDefault: true,
    connection: ':memory:',
    client: 'sqlite3',
    pool: {
      min: 1,
      max: 1,
      idleTimeoutMillis: 360000 * 1000 // see https://github.com/knex/knex/issues/1871
    }
  },
  development: {
    useNullAsDefault: true,
    connection: './todo.db',
    client: 'sqlite3',
  },
  production: {
    useNullAsDefault: true,
    connection: './todo.db',
    client: 'sqlite3',
  }
}

/**
 * create knex instance
 *
 * @param {Knex.Knex.Config} config knex configuration
 * @returns {Knex.Knex} knex instance
 */
export const db = (config = cfg[env]) => {
  logger.info(`init database in [${env}] mode`)
  return Knex(config)
}

/**
 * make sure the todo database is ready for use
 *
 * @param {Knex.Knex} database
 * @returns {Promise} a promise which fulfils when the database is ready
 */
export const initdb = async (database) => {
  logger.info("check database state")
  return database.raw(`
    create table if not exists todos(
      id integer primary key autoincrement,
      description text not null,
      done boolean default false,
      created timestamp default CURRENT_TIMESTAMP
    );
  `)
}

export const testSeed = async (database) => {
  logger.info("insert test data")
  return database.raw(`
    insert into todos (done, description) values (true,'laundry');
    insert into todos (done, description) values (false,'lunch');
    insert into todos (done, description) values (false,'exercise');
  `)
}

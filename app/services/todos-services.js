/**
 * @typedef {import("knex").Knex} Knex
 */

/** 
 * service closure providing all database calls to requests
 * 
 * @param {Knex} db the query builder instance
 * 
 * @returns {{list:Function,find:Function,insert:Function,update:Function,del:Function}} 
 * basic operations for deal with todos
 */
export const todoService = (db) => {

  const list = async (q = "") => db("todos").whereLike("description", `%${q}%`)
  const find = async id => db("todos").where({ id }).first()
  const insert = async todo => db("todos").insert(todo)
  const update = async (id, todo) => db("todos").update(todo).where({ id })
  const del = async id => db("todos").del().where({ id })

  return {
    list, find, insert, update, del
  }
}

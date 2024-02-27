import { logger } from "../configs/logging.js"
/**
 * closure defining all requests
 * 
 * @param {*} service 
 * @returns 
 */
export const todoController = (service) => {

  // simply serve the template root
  const index = async ctx => ctx.render("index.njk", { todos: await service.list() })

  // serve the table again 
  const list = async ctx => {
    const { q = "" } = ctx.query
    const todos = await service.list(q)
    return ctx.render("todos/list.njk", { todos })
  }

  // insert new todo and serve table again
  const insert = async ctx => {
    const { description } = ctx.request.body
    const result = await service.insert({ description })
    logger.info(`success ${result}`)
    const todos = await service.list()
    return ctx.render("todos/list.njk", { todos })
  }

  const find = async ctx => {
    const { id } = ctx.params
    const todo = await service.find(id)
    return ctx.render("todos/detail.njk", { todo })
  }

  const update = async ctx => {
    const { id } = ctx.params
    const { description, done } = ctx.request.body
    const result = await service.update(id, { description, done })
    logger.info(`success ${result}`)
    const todos = await service.list()
    return ctx.render("todos/list.njk", { todos })
  }

  const del = async ctx => {
    const { id } = ctx.params
    const result = await service.del(id)
    logger.info(`success ${result}`)
    const todos = await service.list()
    return ctx.render("todos/list.njk", { todos })
  }

  return {
    index, list, find, insert, update, del
  }
}
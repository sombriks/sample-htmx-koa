
export const todoController = (service) => {

  const index = async ctx => ctx.render("index.njk")
  const list = async ctx => ctx.body = "todo list"
  const insert = async ctx => ctx.body = "insert new todo"
  const find = async ctx => ctx.body = "find todo"
  const update = async ctx => ctx.body = "update todo"
  const del = async ctx => ctx.body = "remove todo"

  return {
    index, list, find, insert, update, del
  }
}
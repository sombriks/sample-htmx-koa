import Koa from "koa"
import Router from "@koa/router"
import views from "@ladjs/koa-views"
import bodyParser from "koa-bodyparser"
import ApiBuilder from "koa-api-builder"
import { db } from "./configs/database.js"
import { getHtmx } from "./configs/htmx-cache.js"
import { templateRoot } from "./configs/project-paths.js"
import { todoService } from "./services/todos-services.js"
import { todoController } from "./controllers/todos-requests.js"

export const app = new Koa()
const router = new Router()

export const database = db()
const service = todoService(database)
const controller = todoController(service)

ApiBuilder({ router }).path(b => {
  b.get("/htmx.js", ctx => ctx.body = getHtmx) // webjars is that you?
  b.get("/", controller.index)
  b.path("/todos", b => {
    b.get(controller.list)
    b.post(controller.insert)
    b.path("/:id", b => {
      b.get(controller.find)
      b.put(controller.update)
      b.del(controller.del)
    })
  })
}).build()

app.use(bodyParser()) // middleware order is important 
app.use(views(templateRoot, { map: { njk: "nunjucks" } })) // maps ext: engine
app.use(router.routes())
app.use(router.allowedMethods())


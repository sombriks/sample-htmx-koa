import Koa from "koa"
import Router from "@koa/router"
import bodyParser from "koa-bodyparser"
import ApiBuilder from "koa-api-builder"
import { db } from "./configs/database.js"
import { todoService } from "./services/todos-services.js"
import { todoController } from "./controllers/todos-requests.js"

export const app = new Koa()
const router = new Router()

const database = db()
const service = todoService(database)
const controller = todoController(service)

ApiBuilder({ router }).path(b => {
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

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())


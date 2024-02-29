import test from 'ava'

import {db, initdb, testSeed} from "../configs/database.js"
import {todoService} from "./todos-services.js"

let database
let service

test.before(async t => {
  database = db()
  service = todoService(database)
  await initdb(database)
  await testSeed(database)
})

test.after.always(async t => {
  await database.destroy()
})

test("Should list", async t => {
  const result = await service.list()
  t.truthy(result)
})

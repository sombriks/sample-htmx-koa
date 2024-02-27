import test from 'ava'
import request from 'supertest'

import { app, database } from './main.js'
import { initdb, testSeed } from "./configs/database.js"

test.before(async t => {
  await initdb(database)
  await testSeed(database)
})

test.after(async t => {
  await database.destroy()
})

test('should get index', async t => {
  const result = await request(app.callback())
    .get('/').expect('Content-Type', /html/)
  t.is(200, result.status)
})

test('should list', async t => {
  const result = await request(app.callback())
    .get('/todos').expect('Content-Type', /html/)
  t.is(200, result.status)
})

test('should insert', async t => {
  const result = await request(app.callback())
    .post('/todos').send({ description: "study" })
    .expect('Content-Type', /html/)
  t.is(200, result.status)
})

test('should find', async t => {
  const result = await request(app.callback())
    .get('/todos/1').expect('Content-Type', /html/)
  t.is(200, result.status)
})

test('should update', async t => {
  const result = await request(app.callback())
    .put('/todos/1').send({ description: "breakfast", done: "false" })
    .expect('Content-Type', /html/)
  t.is(200, result.status)
})

test('should delete', async t => {
  const result = await request(app.callback())
    .del('/todos/1').expect('Content-Type', /html/)
  t.is(200, result.status)
})
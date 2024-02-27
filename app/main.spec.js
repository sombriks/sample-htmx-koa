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
  try {
    const result = await request(app.callback())
      .get('/').expect('Content-Type', /html/)
    t.is(200, result.status)
  } catch (e) {
    t.fail(e.message)
  }
})

test('should get htmx browser script', async t => {
  try {
    const result = await request(app.callback()).get('/htmx.js')
    // .expect('Content-Type', /html/)
    // t.regex(result.header["content-type"], /javascript/)
    t.regex(result.header["content-type"], /text/)
    t.is(200, result.status)
  } catch (e) {
    t.fail(e.message)
  }
})

test('should list', async t => {
  try {
    const result = await request(app.callback())
      .get('/todos').expect('Content-Type', /html/)
    t.is(200, result.status)
  } catch (e) {
    t.fail(e.message || e)
  }
})

test('should insert', async t => {
  try {
    const result = await request(app.callback())
      .post('/todos').send({ description: "study" })
      .expect('Content-Type', /html/)
    t.is(200, result.status)
  } catch (e) {
    t.fail(e.message || e)
  }
})

test('should find', async t => {
  try {
    const result = await request(app.callback())
      .get('/todos/1').expect('Content-Type', /html/)
    t.is(200, result.status)
  } catch (e) {
    t.fail(e.message || e)
  }
})

test('should update', async t => {
  try {
    const result = await request(app.callback())
      .put('/todos/1').send({ description: "breakfast", done: "false" })
      .expect('Content-Type', /html/)
    t.is(200, result.status)
  } catch (e) {
    t.fail(e.message || e)
  }
})

test('should delete', async t => {
  try {
    const result = await request(app.callback())
      .del('/todos/1').expect('Content-Type', /html/)
    t.is(200, result.status)
  } catch (e) {
    t.fail(e.message || e)
  }
})
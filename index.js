import { app, database } from "./app/main.js"
import { initdb } from "./app/configs/database.js"

const port = process.env.PORT || 3000

initdb(database).then(() => {
  console.log("database ready")
  app.listen(port)
  console.log(`open to business on http://localhost${port}`)
})

import { app, database } from "./app/main.js"
import { initdb } from "./app/configs/database.js"
import { logger } from "./app/configs/logging.js"

const port = process.env.PORT || 3000

initdb(database).then(() => {
  logger.info("database ready")
  app.listen(port)
  logger.info(`open to business on http://localhost:${port}`)
})

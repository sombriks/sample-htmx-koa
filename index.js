import { app } from "./app/main.js"

const port = process.env.PORT || 3000

app.listen(port)
console.log(`open to business on http://localhost${port}`)

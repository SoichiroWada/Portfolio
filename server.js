import express from 'express'
import { fileURLToPath } from 'node:url'

const app = express()
const dist = fileURLToPath(new URL('./dist/', import.meta.url))
app.use(express.static(dist))
// Preserve SPA fallback for direct requests.
app.get('/{*path}', (_request, response) => response.sendFile(`${dist}index.html`))
const port = Number(process.env.PORT || 8080)
app.listen(port, () => console.log(`Listening on port ${port}`))

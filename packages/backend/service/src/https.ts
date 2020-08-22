import { createServer } from 'https'
import { readFileSync } from 'fs'

createServer({
  key: readFileSync(__dirname + "/ssl/key.pem"),
  cert: readFileSync(__dirname + "/ssl/cert.pem")
}, (req, res) => {
  console.log(`${req.url} requested`)
  res.writeHead(200)
  res.end()
}).listen(4000, () => {
  console.log(`Server listening on port ${4000}`)
})

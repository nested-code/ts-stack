import { createServer } from 'http2'

const server = createServer()

server.on('stream', (stream, headers, flags) => {
  // const method = headers[':method'];
  // const path = headers[':path'];
  console.log({ headers, flags })
  stream.on('error', (error) => console.error(error))
  stream.respond({
    ':status': 200,
    'content-type': 'text/plain; charset=utf-8'
  })
  // stream.write('hello world')
  return stream.end()
})

server.on('error', (err) => console.error(err))

server.listen(4000)

console.log('Server started at ', server.address())

export const handler = async (event: any, _context: any) => {
  const name = event.queryStringParameters.name || 'World'

  return {
    statusCode: 200,
    body: `Hello, ${name}`
  }
}

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  // rest.get('http://tl.com/token', (req, res, ctx) => {
  //   return res(
  //     ctx.status(202)
  //   )
  // })
)

export default server

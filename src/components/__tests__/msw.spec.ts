import { describe, expect, it } from 'vitest'
import axios from 'axios'
import { rest } from 'msw'

import mockServer from '@/tests/mocks/server'

const a = axios.create({
  baseURL: 'http://tl.com'
})

describe('msw', () => {
  it('mocks server correctly', async () => {
    mockServer.use(
      rest.get('http://tl.com/token', (req, res, ctx) => {
        return res(
          ctx.status(202)
        )
      })
    )

    const r = await a.get('/token')
    expect(r.status).toBe(202)
  })
})

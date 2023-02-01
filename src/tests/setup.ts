import { afterAll, afterEach, beforeAll, vi } from 'vitest'
import server from './mocks/server'

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

vi.resetModules()

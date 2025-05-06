import type { OpenAPIHono as Hono } from '@hono/zod-openapi'

import {
  AuthController,
  UserController,
} from './controllers'

const COMBINE_V1 = {
  BASE_PATH: '/api/v1',
  CONTROLLERS: [
    new AuthController(),
    new UserController(),
  ],
}

export function setupRoutes(server: Hono) {
  COMBINE_V1.CONTROLLERS.forEach((controller) => {
    server.route(COMBINE_V1.BASE_PATH, controller.router)
  })
}

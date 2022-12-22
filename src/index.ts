import {
  getHistoryState,
  isVue3
} from './utils'

import { handleHistoryState } from './vue2'

export default function createRouterBack (origin: any) {
  const router = Object.create(origin)

  if (!isVue3()) {
    handleHistoryState(router, origin)
  }

  router.back = function (args: any) {
    if (getHistoryState() === 0 && args) {
      return router.replace.call(this, args)
    }
    origin.back()
  }

  return router
}

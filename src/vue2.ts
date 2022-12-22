import {
  getHistoryState,
  replaceState,
  isFunction
} from './utils'

export function handleHistoryState (router: any, origin: any) {
  let state = 0
  let isPopState = false

  const popstateEvent = (e: any) => {
    const eventState = getHistoryState(e)
    isPopState = true
    setTimeout(() => {
      isPopState = false

      if (eventState < state) {
        // back
      } else {
        // forward
      }

      if (getHistoryState() === eventState) {
        state = eventState
      } else {
        replaceState(eventState)
      }
    })
  }

  window.addEventListener('popstate', popstateEvent, false)

  router.afterEach(() => {
    if (isPopState) return
    state = getHistoryState()
  })

  router.replace = function (args: any, onComplete?: Function, onAbort?: Function) {
    const currentState = state

    return new Promise((resolve, reject) => {
      origin.replace.call(this, args).then(() => {
        replaceState(currentState)
        state = currentState
        if (isFunction(onComplete)) (onComplete as Function)()
        resolve(undefined)
      }).catch((err: Error) => {
        if (isFunction(onAbort)) (onAbort as Function)(err)
        reject(err)
      })
    })
  }
}

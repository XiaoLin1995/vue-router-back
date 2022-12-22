export function isNumber (obj: any) {
  return Object.prototype.toString.call(obj) === '[object Number]'
}

export function isFunction (obj: any) {
  return Object.prototype.toString.call(obj) === '[object Function]'
}

export function isVue3 () {
  return isNumber(window.history.state?.position)
}
export function replaceState (val: any) {
  if (isVue3()) return
  window.history.replaceState({ key: val }, '')
}

export function getHistoryState (event?: any) {
  const { state } = event || window.history
  return isVue3() ? state.position : (state?.key || 0) * 1
}

function isFunction(func: any): boolean {
  return (
    typeof func === 'function' ||
    Object.prototype.toString.call(func) === '[object Function]'
  )
}

export { isFunction }

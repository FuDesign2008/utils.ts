/**
 *
 * @author fuyg
 * @date  2019-11-13
 */

function computePixelRatio(): number {
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return 1
  }
  const dpr = window.devicePixelRatio || 1
  const ctxAsAny: any = ctx as any
  const bsr =
    ctxAsAny.webkitBackingStorePixelRatio ||
    ctxAsAny.mozBackingStorePixelRatio ||
    ctxAsAny.msBackingStorePixelRatio ||
    ctxAsAny.oBackingStorePixelRatio ||
    ctxAsAny.backingStorePixelRatio ||
    1

  return dpr / bsr
}

// 获取屏幕 物理像素 / 设备独立像素dip 比例
const PIXEL_RATIO = computePixelRatio()

export { computePixelRatio, PIXEL_RATIO }

/**
 *
 * @author fudesign2008@163.com
 * @date  2019-11-08
 */

/**
 * 根据 rect 提取 canvas 中图片数据，并生成base64字符串格式的图片
 *
 */
function trimCanvasAsImage(c: HTMLCanvasElement, rect: ClientRect) {
  const ctx = c.getContext('2d')
  if (!ctx) {
    return ''
  }
  const copyCanvas = document.createElement('canvas')
  const copy = copyCanvas.getContext('2d')
  if (!copy) {
    return ''
  }

  // 高清屏支持
  const imageData = ctx.getImageData(
    rect.left,
    rect.top,
    rect.width,
    rect.height,
  )

  if (!imageData) {
    return ''
  }

  copyCanvas.width = rect.width
  copyCanvas.height = rect.height

  copy.putImageData(imageData, 0, 0)
  const imageUrl = copyCanvas.toDataURL()
  return imageUrl
}

export { trimCanvasAsImage }

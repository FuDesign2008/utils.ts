/**
 *
 *
 * @author fuyg
 * @date  2019-11-13
 */
function hitTestRect(rect: ClientRect, another: ClientRect): boolean {
  const hitTestX =
    (rect.left <= another.left && another.left <= rect.left + rect.width) ||
    (another.left <= rect.left && rect.left <= another.left + another.width)
  const hitTestY =
    (rect.top <= another.top && another.top <= rect.top + rect.height) ||
    (another.top <= rect.top && rect.top <= another.top + another.height)

  return hitTestX && hitTestY
}

function hitTestClientRect(rect: ClientRect, another: ClientRect) {
  const result = hitTestRect(rect, another)
  return result
}

export { hitTestClientRect }

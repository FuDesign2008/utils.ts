/**
 *
 * @author FuDesign2008@163.com
 * @date  2019-11-12
 */

// pdf.js worker 路径，务必配置好
// ⚠️ 注意: 请使用网站根目录的绝对路径
const PDF_JS_WORKER_PATH = '/pdf.worker.min.js'

// 是否支持高清屏
// 1. 支持高清屏的情况下， 截图的大小(pixel)会比截图框大
// 2. 图片大小 = 截图框大小 * PIXEL_RATIO
// 3. PIXEL_RATIO 见 ./utils/screen.js
const SUPPORT_HIGH_DPI_SCREEN = true

export { PDF_JS_WORKER_PATH, SUPPORT_HIGH_DPI_SCREEN }

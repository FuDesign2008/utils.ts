/**
 *
 * @author fudesign2008@163.com
 * @date  2019-11-08
 */

import pdfjsLib from 'pdfjs-dist'
import { PDF_JS_WORKER_PATH } from './config'

pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_JS_WORKER_PATH

export default pdfjsLib

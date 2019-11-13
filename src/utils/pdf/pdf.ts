/**
 *
 * @author FuDesign2008@163.com
 * @date  2019-11-12
 */
import { PDFDocumentProxy } from 'pdfjs-dist'
import pdfjsLib from './pdfjsLib'
import { PIXEL_RATIO } from './screen'

async function loadRemotePdf(filePath: string) {
  const pdfDoc = await pdfjsLib.getDocument(filePath).promise
  return pdfDoc
}

async function renderPdfPage(
  pdfDoc: PDFDocumentProxy,
  pageIndex: number,
  canvas: HTMLCanvasElement,
  scale = 100,
) {
  if (!pdfDoc) {
    return
  }
  const page = await pdfDoc.getPage(pageIndex)

  const viewport = page.getViewport({
    scale: scale / 100,
  })

  const { width, height } = viewport

  // 高清屏支持
  // @see https://github.com/lwenn/pdf-viewer-easy/blob/3dc88ed50feca68e6846898b5c0fb8a19d3f2961/src/pdf.pack.js
  canvas.height = height * PIXEL_RATIO
  canvas.width = width * PIXEL_RATIO
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'

  const context = canvas.getContext('2d')
  if (!context) {
    return
  }

  context.setTransform(PIXEL_RATIO, 0, 0, PIXEL_RATIO, 0, 0)

  await page.render({
    canvasContext: context,
    viewport,
    // intent: 'display',
    // enableWebGL: true,
  }).promise
}

const PDF_MIME_TYPES = ['application/pdf']
function isPdfMimeType(type: string) {
  return PDF_MIME_TYPES.includes((type + '').toLowerCase())
}

async function readPdfFile(file: File) {
  if (!isPdfMimeType(file.type)) {
    return
  }

  return new Promise((resolve /*, reject*/) => {
    const fileReader = new FileReader()

    fileReader.onload = async () => {
      const typedarray = new Uint8Array(fileReader.result as ArrayBuffer)
      const pdfDoc = await pdfjsLib.getDocument(typedarray).promise
      resolve(pdfDoc)
    }

    fileReader.onerror = () => {
      resolve(null)
    }

    fileReader.readAsArrayBuffer(file)
  })
}

export {
  loadRemotePdf,
  renderPdfPage,
  readPdfFile,
  PDF_MIME_TYPES,
  isPdfMimeType,
}

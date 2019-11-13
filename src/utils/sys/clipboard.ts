/**
 *
 * @author fuyg
 * @date  2019-11-04
 */

function retrieveImageFromClipboardAsBlob(
  pasteEvent: ClipboardEvent,
): Blob | null {
  if (!pasteEvent || !pasteEvent.clipboardData) {
    return null
  }

  const items = pasteEvent.clipboardData.items

  if (items == null) {
    return null
  }

  const length = items.length
  for (let i = 0; i < length; i++) {
    // Skip content if not image
    if (items[i].type.indexOf('image') === -1) {
      continue
    }
    // Retrieve image on clipboard as blob
    const blob = items[i].getAsFile()
    if (blob) {
      return blob
    }
  }
  return null
}

async function blobToBase64Image(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const mycanvas = document.createElement('canvas')
    const ctx = mycanvas.getContext('2d')
    if (!ctx) {
      reject('权限不足')
      return
    }

    // Create an image
    const img = new Image()

    // Once the image loads, render the img on the canvas
    img.onload = () => {
      // Update dimensions of the canvas with the dimensions of the image
      mycanvas.width = img.width
      mycanvas.height = img.height

      // Draw the image
      if (ctx) {
        ctx.drawImage(img, 0, 0)
        const base64 = mycanvas.toDataURL('image/png')
        resolve(base64)
      }
    }
    img.onerror = () => {
      reject('图片加载失败')
    }

    // Crossbrowser support for URL
    const URLObj = window.URL || (window as any).webkitURL
    // Creates a DOMString containing a URL representing the object given in the parameter
    // namely the original Blob
    img.src = URLObj.createObjectURL(blob)
  })
}

export { retrieveImageFromClipboardAsBlob, blobToBase64Image }

import { compressImage, base64ToFile, blobToBase64 } from 'sw-image-compression-lib'

const input = document.querySelector('#formFile')
const imgOriginal = document.getElementById('original')
const imgCompress = document.getElementById('compress')

input.addEventListener('change', async (e) => {
    const originalImage = input.files[0]
    setImageToDiv(imgOriginal, originalImage)
    console.groupCollapsed('Оригинальный файл')
    console.log(originalImage);
    console.groupEnd()

    console.time('Сжатие завершено за')
    const image = await compressImage(originalImage, {
        mimeType: 'image/webp'
    })
    console.timeEnd('Сжатие завершено за')

    const base64Image = await blobToBase64(image)

    const newBlobCompressedImage = await base64ToFile(base64Image)

    console.groupCollapsed('Демонстрация вызова всех функций')
    console.log('Сжатый файлик');
    console.log(image);
    console.log('Сжатый файлик, преобразованный в base64');
    console.log(base64Image);
    console.log('Сжатый файлик -> base64 -> Blob');
    console.log(newBlobCompressedImage);
    console.groupEnd()
    
    setImageToDiv(imgCompress, image)
})

/**
 * 
 * @param {Element} element 
 * @param {Blob|File} file 
 */
function setImageToDiv(element, file) {
    const src = URL.createObjectURL(file)
    element.setAttribute('src', src)
}


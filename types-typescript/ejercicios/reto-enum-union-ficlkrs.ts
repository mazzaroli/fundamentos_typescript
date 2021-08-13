export {};
// Resoluciones admitidas en flickrs.com con enumeraciones
enum PicturesSizes {
    small = '75x75',
    medium = '240x180',
    large = '500x375',
    extraLarge = '1024x768',
    superLarge = '3072x2304'
}

const pictureS: PicturesSizes = PicturesSizes.small;
const pictureM: PicturesSizes = PicturesSizes.medium;
const pictureL: PicturesSizes = PicturesSizes.large;
const pictureXL: PicturesSizes = PicturesSizes.extraLarge;
const pictureSL: PicturesSizes = PicturesSizes.superLarge;
console.log(pictureS)
console.log(pictureM)
console.log(pictureL)
console.log(pictureXL)
console.log(pictureSL)

// Resolucion usando Alias de tipos con Union de tipos
type PhotoSizesType = '75x75' | '240x180' | '500x375' | '1024x768' | '3072x2304'

const medium : PhotoSizesType= '240x180';
console.log(medium)
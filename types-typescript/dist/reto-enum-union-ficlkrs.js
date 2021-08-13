"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Resoluciones admitidas en flickrs.com con enumeraciones
var PicturesSizes;
(function (PicturesSizes) {
    PicturesSizes["small"] = "75x75";
    PicturesSizes["medium"] = "240x180";
    PicturesSizes["large"] = "500x375";
    PicturesSizes["extraLarge"] = "1024x768";
    PicturesSizes["superLarge"] = "3072x2304";
})(PicturesSizes || (PicturesSizes = {}));
const pictureS = PicturesSizes.small;
const pictureM = PicturesSizes.medium;
const pictureL = PicturesSizes.large;
const pictureXL = PicturesSizes.extraLarge;
const pictureSL = PicturesSizes.superLarge;
console.log(pictureS);
console.log(pictureM);
console.log(pictureL);
console.log(pictureXL);
console.log(pictureSL);
const medium = '240x180';
console.log(medium);

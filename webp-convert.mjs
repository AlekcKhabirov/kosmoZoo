import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(['src/img/*.{jpg,png}'],
{destination:'img/src',
plugins:[imageminWebp({quality:70})] ,}
);
console.log('..конвертация to webp завершена');
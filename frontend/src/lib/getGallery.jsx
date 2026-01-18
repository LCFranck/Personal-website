import fs from "fs";
import path from "path";

const galleryDir = path.join(process.cwd(), "public/galleryImages");

const galleryImages = fs.readdirSync(galleryDir).filter(file =>
  /\.(png|jpg|jpeg|gif|webp)$/i.test(file)
);

export function getGalleryImages() {
  return galleryImages;
}

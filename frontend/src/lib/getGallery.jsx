import fs from "fs";
import path from "path";

export function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), "public/galleryImages");
  const files = fs.readdirSync(galleryDir);

  return files.filter((file) =>
    /\.(png|jpg|jpeg|gif|webp)$/i.test(file)
  );
}

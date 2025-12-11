import fs from "fs";
import path from "path";

//function to get all image filenames from the galleryImages folder
export function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), "public/galleryImages");
  const files = fs.readdirSync(galleryDir);

  return files.filter((file) => //checks the filetype of files in folder, to make sure only images are returned
    /\.(png|jpg|jpeg|gif|webp)$/i.test(file)
  );
}

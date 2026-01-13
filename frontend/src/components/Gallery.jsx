
import React from "react";
import Image from "next/image";
import { getGalleryImages } from "../lib/getGallery";
import GalleryItem from "./GalleryImage";
import styles from "../styles/Gallery.module.css";

const Gallery = () => {
  const images = getGalleryImages();

  return (
    <div className={styles.galleryContainer} >
      {images.map((img) => (
        <GalleryItem key={img} img={img} />
      ))}
    </div>
  );
}


export default Gallery;

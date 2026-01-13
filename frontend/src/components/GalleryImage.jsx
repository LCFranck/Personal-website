"use client";
import React from "react";
import Image from "next/image";

import styles from "../styles/Gallery.module.css";

const GalleryItem = ({img}) => {


  const showImage = () => {
    window.open(`/galleryImages/${img}`, '_blank');
  }


  return(
    <div>
      <a onClick ={showImage}>

        <Image className={styles.image}
          key={img}
          src={`/galleryImages/${img}`}
          alt=""
          width={200}
          height={200}
        />
      </a>
    </div>

  )}

export default GalleryItem;

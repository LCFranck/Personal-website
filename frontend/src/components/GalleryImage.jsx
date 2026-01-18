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
      <button onClick ={showImage} className={styles.imageButton}>

        <Image className={styles.image}
          key={img}
          src={`/galleryImages/${img}`}
          alt=""
          width={300}
          height={300}
          loading="eager"
        />
      </button>
    </div>

  )}

export default GalleryItem;

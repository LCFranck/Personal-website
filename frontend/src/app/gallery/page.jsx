// app/gallery/page.tsx


import Gallery from "@/components/Gallery";

import MainBox from "@/components/MainBox";
export default function GalleryPage() {


  return (
    <div >
      <MainBox>
      <h1>Gallery!</h1>
      <Gallery></Gallery>
      </MainBox>
    </div>
  );
}

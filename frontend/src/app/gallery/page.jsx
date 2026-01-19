
import Gallery from "../../components/Gallery";
import MainBox from "../../components/MainBox";


export default function GalleryPage() {
  // text-align center style is added due to the mainbox css changing the alignment
  return (
    <div >
      <MainBox>
        <div style={{ textAlign: "center"}}>
          <h1>Gallery!</h1>
          <h2>Press image to open in new tab!</h2>
        </div>
        <Gallery/>
      </MainBox>
    </div>
  );
}

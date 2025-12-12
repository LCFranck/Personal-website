import Countdown from "@/components/Countdown";
import styles from "../../styles/MainBox.module.css";
import MainBox from "@/components/MainBox";

const page = () =>{
  return (
    <div> 
      <MainBox>
      <h1>Countdown</h1>
      <h2>This is page is a countdown for anything that im currently waiting for!</h2>

      <Countdown date={"Jun 1, 2026 00:00:00"} event={"Voruna prime release"} ></Countdown>
      <Countdown date={"Jan 7, 2026 04:00:00"} event={"Infinty Nikki Update"} ></Countdown>
      <Countdown date={"Dec 24, 2025 00:00:00"} event={"Christmas"} ></Countdown>
      <Countdown date={"Dec 31, 2025 00:00:00"} event={"New years eve"} ></Countdown>
      <Countdown date={"Aug 23, 2026 00:00:00"} event={"My Birthday!"} ></Countdown>
      </MainBox>
    </div>
      
  );
}
export default  page
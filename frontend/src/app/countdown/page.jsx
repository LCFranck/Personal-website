import Countdown from "@/components/Countdown";

const page = () =>{
  return (
    <div> 
      <h1>Countdown</h1>
      <h2>This is page is a countdown for anything that im currently waiting for!</h2>

      <Countdown date={"Dec 10, 2025 08:00:00"} event={"Warframe"} ></Countdown>
      <Countdown date={"Dec 24, 2025 04:00:00"} event={"Infinty Nikki Update"} ></Countdown>
    </div>
      
  );
}
export default  page
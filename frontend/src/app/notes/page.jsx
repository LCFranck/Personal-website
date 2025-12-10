import GameStats from "@/components/GameStats";
import MainBox from '@/components/MainBox'


const page = () =>{
  return (
    <div> 
        <MainBox> 
            <GameStats></GameStats>
            <h1>Welcome to my note section!</h1>
        </MainBox> 
    </div>
      
  );
}
export default  page
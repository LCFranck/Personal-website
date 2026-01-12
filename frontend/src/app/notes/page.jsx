import GameStats from "@/components/GameStats";
import MainBox from '@/components/MainBox'
import styles from '@/styles/Profile.module.css'
import Link from "next/link";
import NoteList from "@/components/NoteList";


const page = () =>{
  return (
    <div> 
        <MainBox> 
            
            <h1>Welcome to my note section!</h1>

            <Link href="/profile" className={styles.button}>
            
           
            <span>login to create!</span>
          </Link>
          <NoteList></NoteList>
        </MainBox> 
    </div>
      
  );
}
export default  page
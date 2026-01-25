
import { useState } from 'react'
import Image from 'next/image'
import { buildTeletextUrl, imageExists } from '../lib/txtTv'
import tv_PNG39251 from '../../public/assets/tv_PNG39251.png'

import styles from "../styles/TV.module.css";

//this TV contains txt TV fron the YLE API
const Tv = () =>{

  const [page, setPage] = useState(100);
  const [subpage, setSubpage] = useState(1);
  const [inputPage, setInputPage] = useState(100);



  const onChangePage = async (page, subpage) =>{ //also used for changing subpage
    const exists = await imageExists(page, subpage)
    console.log(exists)
    if(exists){
      setPage(page)
      setSubpage(subpage)
      setInputPage(page)
    }

  }



  const src = buildTeletextUrl(page, subpage);

  return (//supage is only changable on some pages, which is why changing the page, resets the subpage to 1
    <div >
      <div className={styles.tvWrapper}>
        <Image className={styles.frame} src={tv_PNG39251} width={800} height={800} alt="tv boarder" loading="eager" />
        <Image className={styles.screen} src={src} width={800} height={800} alt="text tv!" loading="eager" />
      </div>
      <div className={styles.buttonContainer}>

        <button className={styles.button} onClick={() => onChangePage(page - 1, 1)}>Prev page</button>
        <button className={styles.button} onClick={() => onChangePage(page + 1, 1)}>Next page</button>
        <button className={styles.button} onClick={() => onChangePage(page, subpage - 1)}>Prev subpage</button>
        <button className={styles.button} onClick={() => onChangePage(page, subpage + 1)}>Next subpage</button>

      </div>

      <div className={styles.inputContainer}>
        Page:
        <input
          className={styles.input}
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
          min={100}
          max={899}
        />
        <button onClick={() => onChangePage(parseInt(inputPage, 10) || page, 1)} className={styles.goButton}>
            Go
        </button>
      </div>
    </div>
  );

}
export default Tv

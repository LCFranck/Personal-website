
import { useState } from 'react'
import Image from 'next/image'
import { buildTeletextUrl, imageExists } from '../services/txtTv'
import tv_PNG39251 from '../assets/tv_PNG39251.png'

import styles from "../styles/TV.module.css";

//this TV contains txt TV fron the YLE API
const Tv = () =>{

    const [page, setPage] = useState(100);
    const [subpage, setSubpage] = useState(1);

    const onChangePage = async (page, subpage) =>{
        const exists = await imageExists(page, subpage)
        console.log(exists)
       if(exists){
            setPage(page)
            setSubpage(subpage)
       }
       
    }

    const src = buildTeletextUrl(page, subpage);

    return (//supage is only changable on the first page, which is why changing the page, resets the subpage to 1
    <div className={styles.tvWrapper}>
        <Image className={styles.frame} src={tv_PNG39251} width={800} height={800} alt="tv boarder" loading="eager" />
        <Image className={styles.screen} src={src} width={800} height={800} alt="text tv!" loading="eager" />
        <div >
            <button className={styles.button} onClick={() => onChangePage(page + 1, 1)}>Next page</button>
            <button className={styles.button} onClick={() => onChangePage(page - 1, 1)}>Prev page</button>
            <button className={styles.button} onClick={() => onChangePage(page, subpage + 1)}>Next subpage</button>   
            <button className={styles.button} onClick={() => onChangePage(page, subpage - 1)}>Prev subpage</button>
        </div>
        
    </div>
    );

}
export default  Tv
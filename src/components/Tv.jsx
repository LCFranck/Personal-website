
import { useState } from 'react'
import Image from 'next/image'
import { buildTeletextUrl, imageExists } from '../services/txtTv'

//this TV contains txt TV fron the YLE API
const Tv = () =>{

    const [page, setPage] = useState(100);
    const [subpage, setSubpage] = useState(1);

/*     const buildTeletextUrl = (page, subpage) => {
        const appId = process.env.NEXT_PUBLIC_TV_API; //API defined in the .env file 

        return `https://external.api.yle.fi/v1/teletext/images/${page}/${subpage}.png?${appId}`;
}

   const imageExists = async (page, subpage) =>{
        const url = buildTeletextUrl(page, subpage)
        try {
            const res = await fetch(url);
            return res.ok;
        } catch (err) {
            console.log()
            return false;
        }
} */
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
    <div>
        <Image src={src} width={500} height={500} alt="text tv!" loading="eager" />
        <button onClick={() => onChangePage(page + 1, 1)}>Next page</button>
        <button onClick={() => onChangePage(page, subpage + 1)}>Next subpage</button>
        <button onClick={() => onChangePage(page - 1, 1)}>Prev page</button>
        <button onClick={() => onChangePage(page, subpage - 1)}>Prev subpage</button>
    </div>
    );

}
export default  Tv
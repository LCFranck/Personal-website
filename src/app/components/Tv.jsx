
import { useState } from 'react'
import Image from 'next/image'


const Tv = () =>{

    const [page, setPage] = useState(100);
    const [subpage, setSubpage] = useState(1);

    const buildTeletextUrl = (page, subpage) => {
        const appId = process.env.NEXT_PUBLIC_TV_API;
        console.log(appId + "ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ")

        return `https://external.api.yle.fi/v1/teletext/images/${page}/${subpage}.png?${appId}`;
}

   

    const src = buildTeletextUrl(page, subpage);

    return (
    <div>
        <Image src={src} width={500} height={500} alt="text tv!" />
        <button onClick={() => setPage(page + 1)}>Next page</button>
        <button onClick={() => setSubpage(subpage + 1)}>Next subpage</button>
        <button onClick={() => setPage(page - 1)}>Prev page</button>
        <button onClick={() => setSubpage(subpage - 1)}>Prev subpage</button>
    </div>
    );

}
export default  Tv
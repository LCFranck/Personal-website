"use client"


import { useState, useEffect } from 'react'
import Image from 'next/image'
import Tv from '../../components/Tv'


const page = () =>{

  

return (
  <div>
    <h1>Welcome to my exclusive YLE text TV page!</h1>
    <p> (Not actually exclusive in any way) </p>
    <Tv></Tv>
    <p> this was made usiing the yle API </p>
  </div>
);

}
export default  page
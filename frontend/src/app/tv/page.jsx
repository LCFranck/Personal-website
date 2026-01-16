"use client"


import { useState, useEffect } from 'react'
import Image from 'next/image'
import Tv from '../../components/Tv'
import MainBox from '../../components/MainBox'

const page = () =>{



  return (
    <div>
      <MainBox>
        <h1>Welcome to my exclusive YLE text TV page!</h1>
        <p>  </p>
        <Tv></Tv>

      </MainBox>
    </div>
  );

}
export default page

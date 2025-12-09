"use client"
import Image from "next/image";
import FlipPhone from "../assets/FlipPhone.png";
import { useState, useEffect } from "react";


import styles from "../styles/Countdown.module.css";

const Countdown = ({date, event}) =>{
   // console.log(date);
    const  countDownDate = new Date(date).getTime();
    //const [now, setNow  ]= useState(new Date().getTime());
    const [timeLeft, setTimeLeft] =  useState(countDownDate - Date.now());




useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date().getTime();
    setTimeLeft(countDownDate - now);
    }, 60000);
  return () => {
    clearInterval(interval);
  };
}, []);


  return (
    <div className={styles.box}>
       <h3 className={styles.event}> {event} </h3> 
        <span className={styles.time}>  {Math.floor(timeLeft / (1000 * 60 * 60 * 24))} Days</span>
        <span className={styles.time}>  {Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} Hours </span>
        <span className={styles.time}>  {Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} Minutes</span> 
    </div>
  );
}
export default  Countdown
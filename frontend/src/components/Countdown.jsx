"use client"
import Image from "next/image";
import FlipPhone from "../assets/FlipPhone.png";
import { useState, useEffect } from "react";


import styles from "../styles/Countdown.module.css";

const Countdown = ({date, event}) =>{
  // console.log(date);
  const countDownDate = new Date(date).getTime();
  const [timeLeft, setTimeLeft] = useState(0);


  useEffect(() => { //updates every minute to get the current time left  
    const calculateTime = () => setTimeLeft(countDownDate - Date.now());
    calculateTime();

    const interval = setInterval(() => {
      calculateTime();
    }, 60000);

    return () => clearInterval(interval);
  }, [countDownDate]);


  if (timeLeft <= 0 && timeLeft !== 0) return <div>loading...</div>;

  return (
    <div className={styles.box}>
      <h3 className={styles.event}> {event} </h3>
      <span className={styles.time}>  {Math.floor(timeLeft / (1000 * 60 * 60 * 24))} Days</span>
      <span className={styles.time}>  {Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} Hours </span>
      <span className={styles.time}>  {Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} Minutes</span>
    </div>
  );
}
export default Countdown

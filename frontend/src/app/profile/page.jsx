"use client"
import GameStats from "@/components/GameStats";
import MainBox from "@/components/MainBox";
import { useState, useEffect } from "react";
import LogInform from "@/components/LogInForm";
import noteService from "@/lib/noteService";
import Profile from "@/components/Profile";

const page = () =>{


  return (
    <div>
      <MainBox>
        <LogInform/>


      </MainBox>

    </div>

  );
}
export default page

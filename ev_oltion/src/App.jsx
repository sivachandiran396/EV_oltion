import React, { useEffect } from 'react'
import {useState} from "react"
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
const App = () => {
  let herodata=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give into",text2:"your passions"}
  ]
  const [herocount,setHerocount]=useState(0);
  const [playstatus,setPlaystatus]=useState(false);
  useEffect(()=>{
    setInterval(()=>{
   setHerocount((count)=>{return count==2?0:count+1})
    },3000);
  },[])
  return (
    <div>
     <Background 
     playstatus={playstatus}
     herocount={herocount}/>
     <Navbar/>
     <Hero
     herodata={herodata[herocount]}
     herocount={herocount}
     setHerocount={setHerocount}
     playstatus={playstatus}
     setPlaystatus={setPlaystatus}
     />
    </div>
  )
}

export default App
"use client"
import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import { motion, useScroll, useTransform } from 'framer-motion';

const myFont = localFont({ src: '../SansSerifExbFLF-Italic.woff' });
const markquee = localFont({src:"./MonumentExtended-Ultrabold.otf"});
function TicketBook() {
  const[NumberofGuestAlert,setNumberofGuestAlert]=useState("hidden");
  const[AlphaNumbericAlert,setAlphaNumbericAlert]=useState("hidden");
  const[EnterNumberAlert,setEnterNumberAlert]=useState("hidden");
  const[GuestDetailsAlert,setGuestDetailsAlert]=useState("hidden");
  const[NumberofGuest,setNumberofGuest]=useState("");
  const[TotalCount,setTotalCount]=useState(0);
  const[GuestDetailsShow,setGuestDetailsShow]=useState("hidden"); 
  const[GuestDetailsRow,setGuestDetailsRow]=useState([<div></div>]);
  const[EntireGuestDetails,setEntireGuestDetails]=useState([{name:"",age:""}]);
  const[EntireGuestDetail,setEntireGuestDetail]=useState("hidden");
  const[ticketid,setticketid]=useState(0);
  const[total,setTotal]=useState(0);
  const{scrollYProgress}=useScroll();
  const borderRadius = useTransform(
    scrollYProgress,
    [0,1],
    ["25%","0%"]
  )
  const HandleGuestDetails=()=>{
    if(GuestDetailsAlert=="hidden"){
    for(let i=1;i<=Number(NumberofGuest);i++){
      
     const guestDetails = [];
     var sum=0;
     for (let i = 1; i <= Number(NumberofGuest); i++) {
      let input1:HTMLInputElement =document.querySelector(`.Input1${String(i)}`) as HTMLInputElement
      let input2:HTMLInputElement =document.querySelector(`.Input2${String(i)}`) as HTMLInputElement
      if(input1?.value.length>0 && input2?.value.length>0){
        if(Number.isInteger(Number(input2?.value))){
      if(Number(input2?.value)>2 && Number(input2?.value)<18){
       sum+=100;
      }
      else if(Number(input2?.value)>=18 && Number(input2?.value)<60){
        sum+=500;
      }
      else if(Number(input2?.value)>=60){
       sum+=300;
      }
        guestDetails.push(
          {"name":input1?.value,
          "age":input2?.value
          }
        );
        setTotal(sum)
        setEntireGuestDetails(guestDetails);
        setTotalCount(TotalCount+1);
      }
    
        else{
          setGuestDetailsAlert("");
          setTimeout(()=>{
            setGuestDetailsAlert("hidden");
          },1500)
          setTotal(0);
          setEntireGuestDetails([{name:"",age:""}])
          setTotalCount(0);
         }
      

     }
     else{
      setGuestDetailsAlert("");
      setTimeout(()=>{
        setGuestDetailsAlert("hidden");
      },1500)
      setTotal(0);
      setEntireGuestDetails([{name:"",age:""}])
      setTotalCount(0);
     }
    
    }
  }
  
}
  }

  const HandleNumberOfGuest=()=>{
  if(NumberofGuestAlert=="hidden" && AlphaNumbericAlert=="hidden" && EnterNumberAlert=="hidden"){
    var numberofguest=Number(NumberofGuest.trim())
    if(Number.isInteger(numberofguest)){
        if(numberofguest>100){
          setNumberofGuestAlert("");
          setTimeout(()=>{
            setNumberofGuestAlert("hidden");
          },1500)
        }
        else if(numberofguest==0){
          setEnterNumberAlert("");
          setTimeout(()=>{
            setEnterNumberAlert("hidden");
          },1500)
        }
        else{
            setGuestDetailsShow("")
           for(let i=1;i<=Number(NumberofGuest);i++){
            const guestDetails = [];
            for (let i = 1; i <= Number(NumberofGuest); i++) {
              guestDetails.push(
                <div key={i}  className={`GD${i} w-full bg-orange-600 flex items-center justify-evenly flex-col sm:flex-row pt-[1vw] sm:pt-[2vw] pb-[1vw] sm:pb-[2vw] gap-[1vw] sm:gap-[3vw]`} style={{border:"1px solid grey"}}>
                  <h2 className={`${markquee.className} text-[5vw] sm:text-[2.5vw]`}>Name:</h2>
                  <input className={`Input1${i} w-[90%] sm:w-1/3 rounded-3xl border-none p-[2vw] sm:p-[1vw] pl-[4vw] sm:pl-[2vw]`} type="text" placeholder="FirstName MiddleName LastName"/>
                  <h2 className={`${markquee.className} text-[5vw] sm:text-[2.5vw]`}>Age:</h2>
                  <input className={`Input2${i} w-[90%] sm:w-1/6 rounded-3xl border-none p-[2vw] sm:p-[1vw] pl-[4vw]`} type="text" placeholder="Enter A Number"/>
                </div>
              );
            }
            setGuestDetailsRow(guestDetails);
           }
           setticketid(ticketid+1);
          }
    }
    else{
      setAlphaNumbericAlert("");
      setTimeout(()=>{
        setAlphaNumbericAlert("hidden");
      },1500)
        
    }
    
  }
}

console.log(EntireGuestDetails);
  return (
    <div className="w-full">
      <div className="Wrapper w-full h-[200vh] relative top-0 left-0">
        <div className="w-full h-[100vh] sm:h-[100vh] flex items-center justify-center sticky top-0 left-0 overflow-hidden">
            <div className="max-w-full h-[60%] absolute  hidden sm:flex  items-center justify-evenly flex-wrap mt-[6vw]">
                <div className="TOP w-full flex gap-[2vw]">
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 2vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[6vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 2vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[6vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 2vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[6vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 2vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[6vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 2vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[6vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 2vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[6vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Experience.</h1> 
                  </motion.div>
                   
                </div>
                <div className="MIDDLE w-full flex gap-[2vw]">
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"calc(-100% - 2vw)"}}  animate={{x:"0%"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Book.</h1>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Your.</h1>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"calc(-100% - 2vw)"}}  animate={{x:"0%"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Book.</h1>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Your.</h1>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"calc(-100% - 2vw)"}}  animate={{x:"0%"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Book.</h1>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Your.</h1>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"calc(-100% - 2vw)"}}  animate={{x:"0%"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Book.</h1>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Your.</h1>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"calc(-100% - 2vw)"}}  animate={{x:"0%"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Book.</h1>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Your.</h1>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"calc(-100% - 2vw)"}}  animate={{x:"0%"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Book.</h1>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Your.</h1>
                <h1 className={`${markquee.className} text-[6vw] `} style={{WebkitTextStrokeWidth:"2px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Experience.</h1> 
                  </motion.div>                   
                </div>
                <div className="BOTTOM w-full flex gap-[2vw]">
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 2vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[6vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 2vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[6vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 2vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[6vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 2vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[6vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 2vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[6vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[2vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 2vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[6vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[6vw] `}>Experience.</h1> 
                  </motion.div>
                   
                </div>
            </div>
            <div className="max-w-full h-[57%] absolute flex sm:hidden items-center justify-evenly flex-wrap mt-[20vw]">
                 <div className="TOP w-full flex gap-[75vw]">
                  <motion.div className="w-full flex gap-[10vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 75vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[10vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 75vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[10vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 75vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[10vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 75vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[10vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 75vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[10vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 75vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[10vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Experience.</h1> 
                  </motion.div>
               
                </div>
                <div className="MIDDLE w-full flex gap-[75vw] z-[99]" >
                  <motion.div className="w-full flex gap-[10vw] " initial={{x:"calc(-100% - 75vw)"}}  animate={{x:"0%"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Book.</h1>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Your.</h1>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw] " initial={{x:"calc(-100% - 75vw)"}}  animate={{x:"0%"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Book.</h1>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Your.</h1>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw] " initial={{x:"calc(-100% - 75vw)"}}  animate={{x:"0%"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Book.</h1>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Your.</h1>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw] " initial={{x:"calc(-100% - 75vw)"}}  animate={{x:"0%"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Book.</h1>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Your.</h1>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw] " initial={{x:"calc(-100% - 75vw)"}}  animate={{x:"0%"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Book.</h1>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Your.</h1>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw] " initial={{x:"calc(-100% - 75vw)"}}  animate={{x:"0%"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Book.</h1>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Your.</h1>
                <h1 className={`${markquee.className} text-[10vw]  `} style={{WebkitTextStrokeWidth:"1.5px" , WebkitTextStrokeColor:"black",color:"transparent"}}>Experience.</h1> 
                  </motion.div>
                
                   
                </div>
                <div className="BOTTOM w-full flex gap-[75vw]">
                  <motion.div className="w-full flex gap-[10vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 75vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[10vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 75vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[10vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 75vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[10vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 75vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[10vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 75vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[10vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Experience.</h1> 
                  </motion.div>
                  <motion.div className="w-full flex gap-[10vw]" initial={{x:"0"}}  animate={{x:"calc(-100% - 75vw)"}} transition={{repeat:Infinity,ease:"linear" , duration:6}}>
                  <h1  className={`${markquee.className} text-[10vw] `}>Book.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Your.</h1>
                  <h1  className={`${markquee.className} text-[10vw] `}>Experience.</h1> 
                  </motion.div>
                </div>
            </div>
            <div className='w-full h-full absolute z-[6] flex items-center justify-center  '> 
            <video
            className="w-[70%] sm:w-full h-[90%] rounded-2xl"
            autoPlay
            muted
            loop
            preload="none"
            >
              <source src="bg.mp4" type="video/mp4" />
            </video>
            </div>  
            <div className="w-full absolute top-[0%] sm:top-[10%] z-[11]">
                <h1 className={`${myFont.className} text-2xl sm:text-4xl text-center text-red-600`}>We help you Book ticket for any Skating Event.</h1>
            </div>
        </div>
        <motion.div className="w-full h-[100vh] sm:h-[110vh] bg-yellow-600 absolute z-[3]" transition={{duration:.4,ease:"easeInOut"}} style={{borderTopLeftRadius:borderRadius,borderTopRightRadius:borderRadius}}>
             <div className="w-full h-full flex items-center justify-center flex-col">
             <h1 className={`${markquee.className} text-[5vw] sm:text-[3vw]`}> Enter the Number of Guests</h1>
             <div className="w-full mt-[5vw] sm:mt-[0vw] mb-[5vw] sm:mb-[0vw] flex items-center justify-center  relative">
             <input className="w-[80%] sm:w-1/3 h-full sm:h-[5%] rounded-3xl border-none p-[2vw] mt-[5vw]" type="text" placeholder="Enter a Number" onChange={(e)=>{setNumberofGuest(e.target.value)}}/>
             <div className={`w-1/4 ${NumberofGuestAlert} absolute bottom-[240%] sm:bottom-[10%] left-[40%] sm:left-[67%] rounded-2xl flex items-center justify-center`}><h2 className={`${markquee.className} text-center`}>*We have max accomadation of atmost 100 people</h2></div>
             <div className={`w-1/4 ${AlphaNumbericAlert} absolute bottom-[200%] sm:bottom-[10%] left-[40%] sm:left-[67%] rounded-2xl flex items-center justify-center`}><h2 className={`${markquee.className} text-center`}>* It Needed to be an Number or Integer</h2></div>
             <div className={`w-1/4 ${EnterNumberAlert} absolute bottom-[240%] sm:bottom-[10%] left-[40%] sm:left-[67%] rounded-2xl flex items-center justify-center`}><h2 className={`${markquee.className} text-center`}>* Please Enter a Number</h2></div>
             </div>
             <div className="Submit w-1/2 sm:w-1/6 rounded-2xl h-[10%] sm:h-[5%] relative mt-[5vw] overflow-hidden bg-red-600  p-[2vw] flex items-center justify-center after:content-[''] after:absolute after:rounded-[50%] after:h-full after:w-full after:top-full after:left-0  after:bg-black after:transition-all after:ease-[0.7s]
hover:after:top-0 hover:after:rounded-none  hover:text-white" onClick={HandleNumberOfGuest}>
                <h1 className="absolute z-[9]">Submit</h1>
             </div>
             </div>
        </motion.div>
        <motion.div className={`w-full min-h-[130vh] sm:min-h-[130vh] absolute ${GuestDetailsShow} z-[4] bg-red-600 flex flex-col justify-evenly gap-[6vw] sm:gap-[4vw]`} initial={{y:"100%",borderTopLeftRadius:"25%",borderTopRightRadius:"25%"}} animate={{y:GuestDetailsShow == "hidden" ? "100%" : "0%",borderTopLeftRadius:GuestDetailsShow=="hidden" ? "25%" : "0%",borderTopRightRadius:GuestDetailsShow=="hidden" ? "25%" : "0%"}}  transition={{duration:1.2,ease:"easeInOut"}} >
           <div className="w-full flex items-center justify-center text-[5vw] sm:text-[4vw] mt-[7vw]  sm:mt-[5vw]"><h1 className={`${markquee.className}`}>Enter Details Of The Guests</h1></div>
           {GuestDetailsRow.map((elem)=>elem)}
           <div className="w-full h-[50%] sm:h-[18%] flex items-center justify-center"> <div className="Submit w-[80%] sm:w-[20%] bg-orange-600 rounded-2xl h-full sm:h-[5%] relative overflow-hidden mt-[3vw] sm:mt-[0vw] mb-[5vw] sm:mb-[3vw] p-[7vw] sm:p-[2vw] flex items-center justify-center after:content-[''] after:absolute after:rounded-[50%] after:h-full after:w-full after:top-full after:left-0  after:bg-black after:transition-all after:ease-[0.7s]
hover:after:top-0 hover:after:rounded-none  hover:text-white" onClick={HandleGuestDetails}>
                <h1 className="absolute z-[9]">Submit</h1>
             </div>
             <div className={`w-[60%] sm:w-1/4 ${GuestDetailsAlert} bg-orange-500 absolute bottom-[27%] sm:bottom-[17%] left-[22%] sm:left-[67%] rounded-2xl flex items-center justify-center`}><h2 className={`${markquee.className} text-center`}>* Please Enter Appropriate Details</h2></div>
             </div> 
        </motion.div>
        <motion.div className={`w-full min-h-[130vh] sm:min-h-[130vh] absolute ${TotalCount == EntireGuestDetails.length ? "" : "hidden"}  z-[999] bg-orange-600 flex flex-col justify-evenly gap-[6vw] sm:gap-[4vw]`} initial={{y:"100%",borderTopLeftRadius:"25%",borderTopRightRadius:"25%",}} animate={{y:TotalCount != EntireGuestDetails.length ? "100%" : "0%",borderTopLeftRadius:TotalCount != EntireGuestDetails.length ? "25%" : "0%",borderTopRightRadius:TotalCount != EntireGuestDetails.length ? "25%" : "0%"}}  transition={{duration:1.2,ease:"easeInOut"}}>
           <div className="w-full flex items-center justify-center text-[6.5vw] sm:text-[4vw] mt-[4vw]"><h1 className={`${markquee.className}`}>Details Of The Guests</h1></div>
           <div className="w-full flex items-center justify-center text-[6.5vw] sm:text-[3.5vw] mt-[2vw] bg-yellow-500" ><h1 className={`${markquee.className}`}>Ticket id : {ticketid}</h1></div>
             {EntireGuestDetails.map((elem,idx)=>
      
                <div key={idx} className="w-full h-full flex items-start sm:items-center pl-[2vw] pt-[6vw] sm:pt-[2vw] pb-[4vw] sm:pb-[2vw] gap-[6vw] sm:gap-[3vw]" style={{border:"1px solid grey"}}>   
                             
                 <div className="w-full flex-wrap"> <h2 className={`${markquee.className} text-[5vw] sm:text-[2.5vw] `}>Name:</h2></div>
                 <div className="w-full  flex-wrap"><h3 className={`${markquee.className} text-[5vw] sm:text-[2vw]`} >{elem?.name}</h3></div>
                 <div className="w-full   flex-wrap"> <h2 className={`${markquee.className} text-[5vw] sm:text-[2.5vw] `}>Age:</h2></div>
                  <div className="w-full flex-wrap"><h3 className={`${markquee.className} text-[5vw] sm:text-[2vw]`}>{elem?.age}</h3></div>
                </div>)}
                <div className="w-full flex items-center justify-center text-[6.5vw] sm:text-[3.5vw] mt-[2vw] mb-[4vw] bg-yellow-500" ><h1 className={`${markquee.className}`}>Total Amount : {total}</h1></div> 
        </motion.div>
      </div>
    </div>
  );
}

export default TicketBook;

"use client"
import { useState } from "react"
import localFont from 'next/font/local'
import TicketBook from "./components/TicketBook"
import { useRouter } from "next/navigation"
const myFont = localFont({ src: './SansSerifExbFLF-Italic.woff' }) 
const NavHeader=localFont({src:"./SansSerifExbFLF.woff"})
export default function Home() {
  const[leftWidth,setleftWidth] = useState("50%");
  const[rightWidth,setrightWidth] = useState("50%");
  const router = useRouter();

  return (
    <div className="w-full h-screen relative">
      <div className="Navbar w-full flex fixed z-[2]">
        <div className="Menu w-1/3 pl-[3.5vw]">
        <svg className="h-full text-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
<path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
</svg>
        </div>
        <div className="Logo w-[60%]  flex items-center justify-center pr-[4vw]">
        <svg className="w-[5%] pb-7  h-full text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path></svg>
        <h1 className={`${NavHeader.className} text-[3vw] pl-1  pt-2 text-white`}>MJSTK</h1>
        </div>
        <div className="Menucontent w-1/3 flex  items-center justify-evenly">
        <svg className="w-[7%] text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
        <svg className="w-[7%] text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
        <img src="https://ze-mjstk.netlify.app/assets/profile-pic.jpg" className="rounded-[50%] w-10 h-10"/>
        </div>
      </div>
      <div className="CONTAINER w-full h-full flex overflow-hidden flex-col sm:flex-row">
      <div className="LEFT h-full relative z-[1] flex items-center justify-center" style={{width:leftWidth,background:"linear-gradient(90deg, rgba(0, 135, 204, 1) 0%, rgb(20, 148, 212) 100%)",transition:"all ease 0.8s"}} onMouseEnter={()=>{setrightWidth("37%");setleftWidth("63%")}} onMouseLeave={()=>{setleftWidth("50%");setrightWidth("50%")}}>
          <img src="https://ze-mjstk.netlify.app/assets/penny-skateboard.png" className="w-[80%]"/>
          <div className="w-full h-[70%] absolute left-[12%] flex flex-col items-start justify-evenly">
          <h3 className="text-white">CRUISER SKATEBOARD</h3>  
          <h1 className={`${myFont.className} text-[5vw] text-white`}>MMM <br/> AHHH <br/> ...PUSH IT!</h1>
          <div className="w-[20vw]">
          <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, nam.</p>
          <button className="text-white w-[90%] mt-[1vw] bg-red-700 flex items-center justify-evenly rounded-3xl p-[1vw]" onClick={()=>router.push("/Ticketbook")}>Discover More <svg className="w-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg></button>
          </div>
          </div>
      </div>
       <div className="RIGHT h-full relative z-[1] flex items-center justify-center" style={{width:rightWidth,background:"linear-gradient(90deg, rgba(255, 161, 9, 1) 0%, rgba(203, 129, 10, 1) 100%)",transition:"all ease 0.8s"}} onMouseEnter={()=>{setrightWidth("63%");setleftWidth("37%")}} onMouseLeave={()=>{setleftWidth("50%");setrightWidth("50%")}}>
          <img src="https://ze-mjstk.netlify.app/assets/adidas-shoes.png" className="w-full"/>
          <div className="w-full h-[70%]  absolute left-[7%] flex flex-col items-start justify-evenly">
          <h3 className="text-white">CRUISER SKATEBOARD</h3>  
          <h1 className={`${myFont.className} text-[5vw] text-white`}>BECAUSE <br/> I AM <br/> HAPPY!</h1>
          <div className="w-[20vw]">
          <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, nam.</p>
          <button className="text-white w-[90%] mt-[1vw] bg-red-700 flex items-center justify-evenly rounded-3xl p-[1vw]" onClick={()=>router.push("/Ticketbook")}>Discover More <svg className="w-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg></button>
          </div>
          </div>
       </div>
       </div>
    



    </div>
  )
}

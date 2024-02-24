'use client'
import Image from "next/image";
import Head from "next/head";
import Avater from "@/components/Avater";
import Footer from "@/components/Footer";
import {AdjustmentsHorizontalIcon,MagnifyingGlassIcon,MicrophoneIcon} from '@heroicons/react/24/outline'
import {  useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  // const [term,setinput] = useState("");
  // const history = useRouter()
  // const search = (e) =>{
  //   e.preventDefault();
  
  //   if (!term) return 
  //   history.push(`/search?term=${term}`)
  // }
  const submitform = async () =>{
    var searcter = document.getElementById("searchterm").value;
    return 'https://www.google.com/search?q='+searcter;
  }
 
  return (
    
    <div className="flex flex-col items-center justify-center h-screen w-full p">
      <Head>
        <title>
          google
        </title>
      </Head>
      <header className="flex  w-full p-3 justify-between text-sm text-gray-700">
        <div  className="flex space-x-4 items-center">
          <p className="link">
            About
          </p>
          <p className="link">
            store
          </p>
        </div>
        <div className="flex space-x-4 items-center ">
          <p className="link  "> Gmail </p>
          <p className="link"> images </p>
          <AdjustmentsHorizontalIcon className="h-5 w-5 rounded-full hover:bg-gray-100 cursor-pointer"/>
          <Avater url="https://i.natgeofe.com/n/622368f3-7699-4aa7-a937-dc7a88aa4614/3638.jpg" />
        </div>
      </header>

      <form className ='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image
        src='https://logowik.com/content/uploads/images/google-logo-2020.jpg'
        height={100}
        width={300}
        />
        <div className="flex w-full hover:shadow-lg focus-within:shadow-lg max-w-md border border-gray-200 px-5 py-3 items-center rounded-full sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 text-gray-500 mr-6 link"/>
          <input type="text" id = 'searchterm' className="focus:outline-none flex-grow"  />
          <MicrophoneIcon className="h-5 link"/>
        </div>
        <div className="flex flex-col w-1/2 spac-y-3 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4"> 
          <button className="btn" type='sumbit ' onClick= {submitform}>
            Google Search
          </button>
          <button className="btn" onClick={null}>
            iam Feeling lucky
          </button>
        </div>
      </form>
      <div>

      </div>
      <footer >
        <Footer/>
      </footer>
    </div>


  );
}

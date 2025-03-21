import React, { useEffect } from 'react'
import io from "socket.io-client"

export const App = () => {

  const socket = io ("http://localhost:3000")


  // listneing -- on , 
  //  whenever user first time gets connected ! 
  useEffect(()=>{
    // listneing -- on ,
    socket.on("connect" , () => {
        console.log("client connected, Id : ", socket.id)

    })
  },[])


  return (
    <div>

    <h1>client hello  </h1>


    </div>
  )
}

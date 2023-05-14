import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BsFillTrashFill } from 'react-icons/bs';

function doctorGPT() {
    const [chatHistory,setChatHistory] = useState(["Hi! I am your dentist. Ask me anything!"])
    const [text,setText] = useState("")
    const [loading,setLoading] = useState(false)
    const tellChatGPT = async () => {
        setLoading(true)
        let res = await axios.get("../api/dentistGPT",{ params: { text: text } })
        setChatHistory(chatHistory => [...chatHistory,res.data.msg])
        setLoading(false)
    }
    const handleKeyDown = event => {
        if (event.key === "Enter") {
            // 👇 Get input value
            event.preventDefault();
            setChatHistory(chatHistory => [...chatHistory,text])
            tellChatGPT()
            setText("")
          }
    }
    
  return (
    <>
    <div className='flex flex-col overflow-y-auto'>
    {chatHistory.map((item,index) => {
        return <div className='m-2 p-3 border border-gray-500 shadow' key={index}><p>{item}</p></div>
    })}
    </div>
    <div className='fixed bottom-0 w-10/12 m-3'>
        <button className='m-auto place-items-center border p-4 border-gray-500' onClick={() => setChatHistory(chatHistory => [])}><BsFillTrashFill /></button>
        <textarea disabled = {loading} className='w-full m-3 p-3 border border-gray-500' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => handleKeyDown(e)}/>
    </div>
    </>
  )
}

export default doctorGPT
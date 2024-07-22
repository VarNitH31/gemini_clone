import React, { useContext, useState } from 'react'

import './Main.css'
function Main() {
    
   const {input,onSend,setInput,previous,setPrevious,output,setOutput,recent,setRecent,loading,setLoading,showResult,setShowResult}=useContext(Context)
    
   const handleInputChange=(e)=>{
        setInput(e.target.value)
    }

    const handleKeyDown=(e)=>{
        if (e.key==="Enter") {
            handleSend()
        }
    }

    const handleSend=()=>{
        onSend(input)
       
    }

  return (
    <div className='main'>
        <div className="nav">
            <p className="gemini-name">Gemini</p>
            <div className="navleft">
            <div className="gemini-adv">
                <img src={assets.gemini_icon} alt="" />
                <p>Try Gemini Advanced</p>
            </div>
            <img src={assets.user_icon} alt="" />
            </div>
        </div>
        <div className="content">
            {!showResult?<>
            <div className="heading">
            <p className="heading1"><span>Hello, Varnith </span></p>
            <p className="heading2">How can I help you today?</p>
            </div>
        <div className="cards">
            <div className="card"><p>Suggest videos to quickly solve a problem</p> <img src={assets.youtube_icon} alt="" /> </div>
            <div className="card"><p>Look up a Linux shell command for a specific task</p> <img src={assets.code_icon} alt="" /></div>
            <div className="card"><p>Improve the readability of the following code</p> <img src={assets.code_icon} alt="" /></div>
            <div className="card"><p>Help me craft an OOO message based on a few details</p> <img src={assets.compass_icon} alt="" /></div>
        </div>
            </>:<>
            
                <div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recent}</p>
                    </div>
                    {loading?<div className='loader' ><hr />
                    <hr />
                    <hr style={{ width: '600px' }} />
                    </div>:<div className="result-content">
                        <img src={assets.gemini_icon} alt="" />
                    <p dangerouslySetInnerHTML={{__html:output}} ></p>
                    </div>}
                    
                    </div>
            </>}
       
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder="Enter prompt here" name="" id="" value={input} onChange={handleInputChange} onKeyDown={handleKeyDown} />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" onClick={handleSend} />
                </div>
            </div>
            <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
      
    </div>
  )
}
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
export default Main

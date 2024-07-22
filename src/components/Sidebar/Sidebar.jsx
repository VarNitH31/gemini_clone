import React from 'react'
import {useContext,useState } from 'react';
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';
function Sidebar() {


    const {input,onSend,setInput,previous,setPrevious,output,setOutput,recent,setRecent,loading,setLoading,showResult,setShowResult}=useContext(Context)



    const [extended, setExtended] = useState(false);
    const handleExtended=()=>{
        setExtended(!extended)
    }

    
    const handleNewChat=()=>{
        setInput("");
        setOutput("");
        setShowResult(false);
    }

  return (
    <div className='sidebar'>
       <div className="top">
            <img className='menu' src={assets.menu_icon} alt="" onClick={handleExtended} />
            <div className="new-chat" onClick={handleNewChat}>
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}  
            </div>
            {extended?  <div className='recent'>
                <p className="recent-title">Recent</p>
                {previous.map((item,index)=>{
                    return (
                <div className="recent-entry" onClick={()=>{setInput(item)
                    onSend(item)
                }}>
                    <img src={assets.message_icon} alt="" />
                    <p>{item}...</p>
                </div>
                    )
                })}
            </div>:null}
          
       </div>
       <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
            </div>
       </div>
    </div>
  )
}

export default Sidebar

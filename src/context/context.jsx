import { createContext, useState } from "react"
import run from "../config/gemini";

export const Context=createContext();
 const ContextProvider=(props)=>{
    
    const delayPara=(index,nextWord)=>{
        setTimeout(() => {
            setOutput(prev=>prev+nextWord);
        }, 25*index);
    }




    const onSend=async(prompt)=>{
        setOutput("");
        setLoading(true);
        setShowResult(true);
        setRecent(prompt);
        const response=await run(prompt);
        let responseArray=response.split("**");

        let newResponse="";

        for(let i=0;i<responseArray.length;i++){
            if (i==0 || i%2==0) {
                newResponse+=responseArray[i]
            }
            else{
                newResponse+="<strong>"+responseArray[i]+"</strong>"
            }
        }
        let newResponse2=newResponse.split("*").join("</br>")
        console.log(newResponse2);
        let newResponseArray=newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
            delayPara(i,newResponseArray[i]+" ")
        }
        setLoading(false);
        setPrevious([...previous,prompt])
        setInput("");
        
    }
    
    const [input,setInput]=useState("");
    const [output,setOutput]=useState("");
    const [recent,setRecent]=useState("");
    const [previous,setPrevious]=useState([]);
    const [loading,setLoading]=useState(false);
    const [showResult,setShowResult]=useState(false);


    const contextValue={
        input,
        onSend,
        setInput,
        previous,
        setPrevious,
        output,
        setOutput,
        recent,
        setRecent,
        loading,
        setLoading,
        showResult,
        setShowResult
    }

    return (

            <Context.Provider value={contextValue}>
                {props.children}
            </Context.Provider>

    )
 }

 export default ContextProvider
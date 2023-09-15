import React, { useEffect, useRef, useState } from 'react'

export  const Typewriter = ({text,time}) => {
    const index = useRef(0);
    const [currenttext,setcurrenttext] =useState('');

    useEffect(() => {
        const timeoutid =  setTimeout(() => {
            setcurrenttext((value) => value + text.charAt(index.current));
            index.current++;
        }, time);
        return () => {
            clearTimeout(timeoutid);
        };
    },[currenttext,text])
  return (
    <p>{currenttext}</p>
  )
}

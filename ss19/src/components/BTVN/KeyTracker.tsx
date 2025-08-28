import React, { useEffect, useState, type AllHTMLAttributes } from 'react'

export default function KeyTracker() {
    const [key, setKey] = useState("");
    useEffect(() => {
        window.addEventListener("keydown", function(e: React.KeyboardEvent){
            setKey(e.key)
        })
    })
  return (
    <div>
      <span>Phím bạn vừa ấn: {key}</span>
    </div>
  )
}
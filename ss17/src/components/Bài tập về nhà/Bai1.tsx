import React, { useState } from 'react'

export default function Bai1() {

  const [name , setName] = useState("Nguyen Van A")
    
  return (
    <div>
      <h3>Họ và tên : {name}</h3>
    </div>
  )
}

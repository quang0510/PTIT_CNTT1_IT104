import React from 'react'

export default function Bai5() {
  return (
    <div className="bg-blue-200 w-fit p-10 ">
      <div className="bg-blue-300 w-[400px] h-[400px] p-5 relative">
        Relative Parent
        <div className="bg-blue-400 w-[200px] h-[100px] absolute bottom-0 left-0">
          Absolute child
        </div>
      </div>
    </div>
  )
}

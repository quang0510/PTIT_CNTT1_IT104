import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Bai4() {

    const [searchParam , setSearchParam] = useSearchParams("");
    const [inputValue , setInputValue] = useState("");

    const handleClick = () => {
        setSearchParam({
            studentName: inputValue,
        });
    }

    const studentName = searchParam.get('studentName')

  
  return (
    <div>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='Nhập từ khóa tìm kiếm' />
        <button onClick={handleClick}>Tìm kiếm</button>


        <h2>lấy kết quả trên thanh url. studentName : {studentName}</h2>
    </div>
  )
}

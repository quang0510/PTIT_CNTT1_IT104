import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function StudentBai3() {

    const [searchParam , setSearchParam] = useSearchParams("");
    const [inputValue , setInputValue] = useState("");

    const handleClick = () => {
        setSearchParam({
            studentName: inputValue,
        });
    }

  return (
    <div>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='Nhập từ khóa tìm kiếm' />
        <button onClick={handleClick}>Tìm kiếm</button>

    </div>
  )
}

import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { random } from '../redux/slices/number.slice'


export default function RandomNumber() {
    const data = useAppSelector((state) =>state.numbers)
    const dispatch = useAppDispatch()
    const handleRandomNumber = () => {
        dispatch(random())
    }
  return (
    <div>
        <h2>List number: {JSON.stringify(data)}</h2>
        <button onClick={handleRandomNumber}>Random</button>
    </div>
  )
}
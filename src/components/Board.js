import React from 'react'
import { useSelector } from 'react-redux'
import { Square } from 'components/Square'

export const Board = () => {
  // This function takes the entire store from Redux and returns smth from the store. 
  // This is an implicit return, that returns the array of squars
  const squares = useSelector((store ) => store.game.squares)
  

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}

import React from 'react'
import { useDispatch } from 'react-redux'
import { game } from 'reducers/game'
import { Player } from 'components/Player'

export const Square = ({ value, index }) => {
  // down below helps us and allows us to trigger things in our store
  // within our redux store we can dispatch actions
  const dispatch = useDispatch()
  
  const handleClick = () => {
    // this tells redux we have clicked on a square and now time to execute the action
   // this is a payload
    dispatch(game.actions.captureSquare({index}))
    // Dispached the action above
  }

  return (
    <button
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} />
    </button>
  )
}

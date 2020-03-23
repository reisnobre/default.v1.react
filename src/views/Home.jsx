import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setApplicationConn } from '../actions/applicationActions'
import { Button } from 'react-bulma-components'

export default function Home () {
  const conn = useSelector(state => state.applicationReducer.conn)
  const dispatch = useDispatch()

  return (
    <main className='page' id='home'>
      <Button>Aqui</Button>
      <button onClick={() => dispatch(setApplicationConn('production'))}>Production</button>
      {conn}
    </main>
  )
}

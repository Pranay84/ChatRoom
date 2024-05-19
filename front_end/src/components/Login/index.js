import io from 'socket.io-client'
import React, { useContext, useState } from 'react'
import RoomContext from '../../context/roomContext'
import { useNavigate } from 'react-router-dom';
import Chats from '../Chats';
import ChatList from '../ChatList';

import './index.css'


const socket1 = io.connect("http://localhost:3000")

const Login = () => {
  const {room, username, socket, setSockets, setUsername, setRoom} = useContext(RoomContext)
  const navigate = useNavigate()
  // const [userId, setUsernames] = useState('')
  // const [roomId, setRoomId] = useState('')
  // const [socktes, setSocket] = useState({})

  // setSockets(socket)

  const onFormSubmit = async event => {
    event.preventDefault()
    // setUsername(userId)
    // setRoom(roomId)
    setSockets(socket1)

    console.log(room)

    if (username !== undefined && room !== undefined){
      await socket1.emit("joinRoom", room)
      navigate('/chatRoom')
    }
  }

  return(
   <div className='mainContainer' >
    <div className='dataContainer' >
      <form onSubmit={onFormSubmit} className='roomForm' >
        <div className='inputDataContainer' >
          <label>Username: </label>
          <input placeholder='Enter your Username' className='inputField' value={username} onChange={(event) => setUsername(event.target.value) } />
        </div>
        <div className='inputDataContainer' >
          <label>Room Id:</label>
          <input placeholder='Enter your Roomid' className='inputField' value={room} onChange={(event) => setRoom(event.target.value)} />
        </div>
        <button type='submit' className='submitButton' >Submit</button>
      </form>
    </div>
   </div>
  )
}

export default Login
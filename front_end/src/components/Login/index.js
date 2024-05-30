import io from 'socket.io-client'
import React, { useContext } from 'react'
import RoomContext from '../../context/roomContext'
import { useNavigate } from 'react-router-dom';

import './index.css'


const socket1 = io.connect("http://localhost:3000")

const Login = () => {
  const {room, username, setSockets, setUsername, setRoom} = useContext(RoomContext)
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

  const use = () => {
    setTimeout(() => {
    }, 1000)
  }

  return(
   <div className='mainContainer' >
    <h1 className='heading' >AnonChat</h1>
    <div className='container' >
      <div className='typper typewritter' >
        <h1>Chat with your friend anonymously</h1>
        <h1>with end-to-end encryption</h1>
        <h1>without the hassle of creating account</h1>
        <h1>Try our AnonChat today</h1>
      </div>
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
    <p className='p' >Crafted by Pranay Kotagiri</p>
   </div>
  )
}

export default Login
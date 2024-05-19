import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { Component, createContext, useState } from "react"
import io from 'socket.io-client'
import Login from './components/Login'
import RoomContext from './context/roomContext'
import Rooms from './context/roomContext'
import Chats from './components/Chats'

class App extends Component {
  state = {room: '', username: '', socket: {}, isUsers: false}

  changeRoomId = (roomId) => {
    this.setState({room: roomId})
  }

  changeUsername = (user) => {
    this.setState({username: user})
  }

  changeSocket = (sockets) => {
    this.setState({socket: sockets})
  }

  ChangeUserChecker = (isUser) => {
    this.setState({isUsers: isUser})
  }

 render(){
  const {room, username, socket, isUsers} = this.state

  return(
    <RoomContext.Provider value={{room, username, socket, isUsers,setRoom: this.changeRoomId, setUsername: this.changeUsername, setSockets: this.changeSocket, setCheckUser: this.ChangeUserChecker}}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Login} />
          <Route exact path='/chatRoom' Component={Chats} />
        </Routes>
      </BrowserRouter>
    </RoomContext.Provider>
  )
 }
}

export default App
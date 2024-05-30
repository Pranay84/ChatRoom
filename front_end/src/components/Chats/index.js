import { useContext, useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import RoomContext from "../../context/roomContext";
import ChatList from "../ChatList";

import './index.css'

import {MainChats, ButtonContainer, InputField, Buttons, IntroContainer, MainContainer, MainRoomConatiner, RoomDetails} from './styledComponents'

function Chats(){
    const {room, username, socket} = useContext(RoomContext)
    const [message, setMessage] = useState('')
    const [messageDatas, setMessageDatas] = useState()

    // console.log(socket.connected)

    if (socket.connected === undefined){
        window.location.replace('/')
    }
    
    const SendMessage = async () => {
        const messageData = {
            username,
            room,
            message,
            timeStamp: new Date(Date.now())
        }

        // console.log(messageDatas)

        // console.log(messageData.timeStamp)

        await socket.emit("sendMessage", messageData)
    }

    useEffect(() => {
        socket.on("recieveMessage", (data) => {
            console.log(data)
            setMessageDatas(data)
        })
    }, [socket])

    const onLeaveRoom = () => {
        socket.emit("leaveRoom", room)
        window.location.replace('/')
    }

    const CloseRoom = () => {
        socket.emit("quit_room", room)
        window.location.replace('/')
    }

    console.log(messageDatas)

    return(
        <MainContainer>
            <MainRoomConatiner>
                <h1>Room Id</h1>
                <RoomDetails>{room}</RoomDetails>
            </MainRoomConatiner>
            <MainChats className="chatLists" >
                <IntroContainer>
                    <div>
                        <div>
                            <h1>Enter your chats here</h1>
                            <p>They are not end-to-end ecrypted</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={onLeaveRoom} >Leave Room</button>
                        <button onClick={CloseRoom} >Close Room</button>
                    </div>
                </IntroContainer>
                <ChatList room={room} username={username} messageDatas={messageDatas} />
                <ButtonContainer>
                    <InputField placeholder='Your message' value={message} autofocus onChange={(event) => setMessage(event.target.value)} />
                    <Buttons onClick={SendMessage}>
                        <IoSend />
                    </Buttons>
                </ButtonContainer>
            </MainChats>
        </MainContainer>
    )
}

export default Chats
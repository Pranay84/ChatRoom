import { useContext, useState } from "react"
import bcrypt from "bcryptjs-react";
import RoomContext from "../../context/roomContext"
import './index.css'

import {MainListItem, TopHead, Sender, SentTime, MessageData, MainAlign} from './styledComponents'

const EachChat = props => {
    const {username, isUsers, setCheckUser} = useContext(RoomContext)
    // const [isUser, setUser] = useState(false)
    const {details} = props
    const {id, uname, message, timestamp} = details

    let isUser = false

    let count = 0
    count = count + 1
    
    const time = timestamp.substring(11, 19)

    if (uname === username){
        isUser = true
        // setCheckUser(true)
    }else{
        isUser = false
    }

    // setCheckUser(isUser)

    return(
        <MainAlign>
            {count <= 1 ? (
            <MainListItem id={id} isUser={isUser} className={isUser ? "user" : "notUser"} >
                <TopHead>
                    <Sender>{uname}</Sender>
                    <SentTime>{time}</SentTime>
                </TopHead>
                <MessageData>{message}</MessageData>
            </MainListItem>) : undefined}
        </MainAlign>
    )
}

export default EachChat
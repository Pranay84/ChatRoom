// eslint-disable-next-line react-hooks/exhaustive-deps

import { useContext, useEffect, useState } from "react"
import RoomContext from "../../context/roomContext"
import EachChat from "../EachChat"

import {MainChatContainer, ChatLists} from './styledComponents'

const ChatList = props => {
    const {room, messageDatas} = props
    const [allData, setData] = useState([])
    const [isCalled] = useState(0)
    const {isUsers} = useContext(RoomContext)
    console.log(room)
    
    // console.log(socket)
    // console.log(1)


    console.log(messageDatas)

    if (messageDatas !== undefined){
        const {timeStamp} = messageDatas
        console.log(timeStamp)
    }

    const getData = async () => {
        const url = 'http://localhost:3002/getData'
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({roomId: room})
        }

        const response = await fetch(url, options)
        const data = await response.json()
        setData(data)
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [messageDatas])

    console.log(allData)
    console.log(isUsers)

    return (
        <ChatLists>
            <MainChatContainer>
                {allData.map((each) => <EachChat details={each} called={isCalled} />)}
            </MainChatContainer>
        </ChatLists>
    )
}

export default ChatList
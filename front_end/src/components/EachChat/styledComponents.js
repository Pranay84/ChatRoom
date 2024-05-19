import styled from 'styled-components'

export const MainAlign = styled.div`
display: flex;
align-self: flex-start;
`

export const MainListItem = styled.li`
display: flex;
flex-direction: column;
margin-left: ${props => props.isUser ? '130px': '0px'};
background-color: ${props => props.isUser ? 'green': 'black'};
width: 200px;
height: 90px;
color: white;
border: 0px;
border-radius: 8px;
padding: 10px;
`

export const TopHead = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 0px;
`

export const Sender = styled.p`
font-size: 20px;
margin-top: 0px;
`

export const SentTime = styled.p`
font-size: 14px;
margin-top: 0px;
`

export const MessageData = styled.p`
font-size: 16px;
margin-bottom: 0px;
padding-bottom: 0px;
`
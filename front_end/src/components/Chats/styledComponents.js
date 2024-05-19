import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: black;
height: auto;
`

export const MainChats = styled.div`
display: flex;
flex-direction: column;
align-self: flex-end;
width: 400px;
background-color: white;
height: auto;
border-top-left-radius: 12px;
border-bottom-left-radius: 12px;
margin-top: 1px;
margin-bottom: 1px;
padding-right: 15px;
padding-left: 20px;
`

export const ButtonContainer = styled.div`
display:flex;
flex-direction: row;
align-self: flex-end;
margin-bottom: 20px;
padding-bottom: 20px;
`
export const InputField = styled.input`
width: 260px;
padding: 3px;
padding-left: 10px;
`

export const Buttons = styled.button`
background-color: transparent;
border: 0px;
font-size: 20px;
`

export const IntroContainer = styled.div`
display: flex;
flex-direction: column;
align-self: flex-end;
text-align: center;
`

export const MainRoomConatiner = styled.div`
margin-top: 15px;
margin-left:auto;
color: white;
margin-right: auto;
`

export const RoomDetails = styled.p`
text-align: center;
font-size: 28px;
`
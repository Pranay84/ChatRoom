import { createContext, useContext, useState } from "react";

const RoomContext = createContext({
    room: '',
    setRoom: (value) => {},
    username: '',
    setUsername: (value) => {},
    socket: {},
    setSockets: (value) => {},
    isUsers: false,
    setCheckUser: (value) => {},
})

export default RoomContext
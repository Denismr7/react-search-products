import React, {useState, createContext} from 'react'

export const LoginConsumer = createContext()

export const LoginProvider = (props) => {
    const [login, setLogin] = useState(false)
    const [userLog, setUserLog] = useState({})
    return (
        <LoginConsumer.Provider value={[login, setLogin, userLog, setUserLog]} >
        {props.children}
        </LoginConsumer.Provider>
    )
}
import React, {useState, createContext} from 'react'

export const LoginConsumer = createContext()

export const LoginProvider = (props) => {
    const [login, setLogin] = useState(false)
    return (
        <LoginConsumer.Provider value={[login, setLogin]} >
        {props.children}
        </LoginConsumer.Provider>
    )
}
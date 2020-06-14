import React, {useState, createContext} from 'react'

export const StateConsumer = createContext()

export const StateProvider = (props) => {
    const [selectedItem, setSelectedItem] = useState({})
    const [login, setLogin] = useState(false)
    return (
        <StateConsumer.Provider value={[selectedItem, setSelectedItem, login, setLogin]} >
        {props.children}
        </StateConsumer.Provider>
    )
}
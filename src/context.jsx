import React, {useState, createContext} from 'react'

export const StateConsumer = createContext()

export const StateProvider = (props) => {
    const [selectedItem, setSelectedItem] = useState({})
    return (
        <StateConsumer.Provider value={[selectedItem, setSelectedItem]} >
        {props.children}
        </StateConsumer.Provider>
    )
}
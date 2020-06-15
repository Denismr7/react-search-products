import React, {useContext} from 'react'
import {LoginConsumer} from '../loginContext'
import { Redirect } from 'react-router-dom'

function Profile() {
    const [login,,userLog,] = useContext(LoginConsumer)
    if (login) {
        console.log(userLog)
        return <h1>Hello, {userLog.name.split(" ")[0]}!</h1>
    }
    else {
       return <Redirect to="/" />
    }
}

export default Profile
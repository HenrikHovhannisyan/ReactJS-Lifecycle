import React from "react";
import { useParams } from 'react-router-dom';
import { UserInfo } from "./UserInfo";

const User = () => {
    const {id} = useParams()
    return(
        <UserInfo userId={id}/>
    )
}

export default  User
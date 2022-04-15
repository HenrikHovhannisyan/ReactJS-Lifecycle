import { getByTestId } from "@testing-library/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './style.css';

function UsersList(props) {
    const navigate = useNavigate();
    
    function getUserId(e, id) {
        e.preventDefault();
        console.log(id);
        navigate(`/user/${id}`);
    }

    return (
        <div>
            <div className="header">
                <Link to='/' className="nav-link" >Home</Link>
            </div>
            <ul className="usersList">
                {props.user && (
                    props.user.map(user => (
                        <React.Fragment key={user.id} >
                            <li className="userItem">
                                <div onClick={ (e) => getUserId(e, user.id) } >
                                    <img src={user.avatar_url} width="200" height="200"></img>
                                    <p className="userName">{user.username}</p>
                                </div>
                            </li>
                        </React.Fragment>
                    ))
                )}
            </ul>
        </div>
    )
}

export default UsersList;
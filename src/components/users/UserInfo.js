import React from "react";
import { FetchUser } from "../../helperFunctions/FetchUser";

export class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: []
        }
    }

    componentDidMount() {
        FetchUser(this.props.userId)
        .then(data => this.setState({userInfo: data}))
    }

    render() {
        let user = this.state.userInfo;
        return(
            <div style={{textAlign: 'center', marginTop: 15}}>
                <img src={user.avatar_url} width="200" height="200"></img>
                <p>User name: {user.login}</p>
                <p>User email: {user.html_url}</p>
                <p>User URL: {user.url}</p>
            </div>
        )
    }
}

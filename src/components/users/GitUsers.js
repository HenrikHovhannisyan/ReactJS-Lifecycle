import React from "react";
import UsersList from "./UsersList";

class GitUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users')
        // fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => this.setState({usersList : res}))
        .catch(e => console.log(e.message))
    }

    render() {
        return (
            <React.Fragment>
                {console.log(this.state.usersList)}
                {this.state.usersList && <UsersList user={this.state.usersList} />}
            </React.Fragment>
        )
    }
}

export default GitUsers;
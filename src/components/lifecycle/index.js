import React from "react";
import { NavLink } from "react-router-dom";

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      arm: [],
      eror:false
    }
    this.fetchData = this.fetchData.bind(this)
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => this.setState({data}))
    .catch(e => this.setState({error:true}))
    console.log('did mount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true
    // by default true
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log('did update')
  }

  componentWillUnmount() {
    console.log('Unmount');
  }

   fetchData(url) {
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
    .then(response => response.json())
    .then(data => this.setState({data}))
    
  }

  // componentDidCatch(eror,info) {
  //   console.log(eror, info)
  // }

  render() {
    const coronaArm = () => {
      fetch(`https://corona-api.com/countries/am`)
      .then(response => response.json())
      .then(arm => this.setState({arm:arm.data}))
    }
    const {name} = this.state?.arm
  
    return (
      <div style={{textAlign: 'center'}}>
        {console.log('render')}
        <div className="header">
          <NavLink to={'basic-page'} className="nav-link" >Basic Page</NavLink>
          <NavLink to={'users'} className="nav-link" >Git Users</NavLink>
        </div>
        <h1>{name}</h1>
        <h2>Title</h2>
        <button onClick={() => this.fetchData('todos')}>Todos</button>
        <button onClick={() => this.fetchData('posts')}>Posts</button>
        <button onClick={() => coronaArm()}>Arm</button>
        <hr></hr>
        {
          this.state.data && this.state.data.map((data) => {
            if(data.body) {
              return (
                <React.Fragment key={data.id}>
                  <p>{data.title}</p>
                  <strong>{data.body}</strong>
                  <hr></hr>
                </React.Fragment>
                )
            } else {
              return (<p key={data.id}>{data.title}</p>)
            }
          })
        }
      </div>
    );
  };
}

export default Lifecycle;
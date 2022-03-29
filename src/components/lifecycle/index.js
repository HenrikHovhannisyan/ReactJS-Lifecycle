import React from "react";

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.fetchData = this.fetchData.bind(this)
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => this.setState({data}))
  }

   fetchData(url) {
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
    .then(response => response.json())
    .then(data => this.setState({data}))
  }


  render() {
  
    return (
      <div style={{textAlign: 'center'}}>
      {console.log(this.state.data)}
        <h2>Title</h2>
        <button onClick={() => this.fetchData('todos')}>Todos</button>
        <button onClick={() => this.fetchData('posts')}>Posts</button>
        <hr></hr>
        {
          this.state.data && this.state.data.map((data) => {
            if(data.body) {
              return (
                <>
                  <p>{data.title}</p>
                  <strong>{data.body}</strong>
                  <hr></hr>
                </>
                )
            } else {
              return (<p>{data.title}</p>)
            }
          })
        }
      </div>
    );
  };
}

export default Lifecycle;
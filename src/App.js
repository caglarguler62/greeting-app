import React from 'react'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {userName: 'Guest'};
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
  this.setState  ({userName: e.target.value.trim()? e.target.value : 'Guest'})
  }
  render(){
  return (
          <div>
            <h1>Hello {this.state.userName}</h1>
            <label htmlFor="user_name">enter your name</label><br/>
            <input id="user_name"type="text" onChange={this.handleChange}/>
          </div>
        )
  }
}

export default App;

import React from 'react'
import Form from './components/Form'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {userName: 'Guest'};
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(name){
  this.setState  ({userName: name.trim()? name: 'Guest'})
  }
  render(){
  return (
          <div>
            <h1>Hello {this.state.userName}</h1>
            <Form onInput={this.handleChange}/>
          </div>
        )
  }
}

export default App;

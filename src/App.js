// import logo from './logo.svg';
// import './App.css';

// class Header extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>Hello Worls</h1>
//         <p>this is parent/child-sibling app</p>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {userName: 'Guler'};
  //   this.changeName = this.changeName.bind(this)
  // }
  // changeName(newName){
  //   this.setState = ({userName: newName})
  }
  render(){
  return (
          <div>
            <h1>Hello {this.state.userName}</h1>
            <label htmlFor="user_name">enter your name</label><br/>
            <input id="user_name"type="text"/>
          </div>
        )
  }
}

export default App;

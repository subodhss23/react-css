import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count : 1
    }
  }


  render(){
    return (
      <div className="app">
          <h1>is this working?</h1>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
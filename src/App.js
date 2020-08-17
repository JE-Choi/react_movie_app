import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true,
    movies:[]
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading: false});
    }, 3000);
  }
  render(){
    const {isLoading} = this.state;
  return <>{isLoading?"Loading":"We are ready"}</>;
  }
}

export default App;

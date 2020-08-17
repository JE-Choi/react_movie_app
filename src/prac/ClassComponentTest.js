import React from 'react';

class ClassComponentTest extends React.Component{
    constructor(props){
         super(props);
        console.log("constructor");
    }
    state = {
        count: 0
    }
    add = () =>{
        this.setState(cur => ({count: cur.count + 1}));
    };

    minus = () =>{
        this.setState(cur => ({count: cur.count - 1}));
    }

    componentDidMount(){
        console.log("componentDidMount");
    }
    
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    
    render(){
        console.log("render");
        return <>
            <h3>{this.state.count}</h3>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
        </>;
    }
}

export default ClassComponentTest;

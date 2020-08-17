import React from 'react';

class ClassComponentTest extends React.Component{
    state = {
        count: 0
    }
    add = () =>{
        this.setState(cur => ({count: cur.count + 1}));
    };

    minus = () =>{
        this.setState(cur => ({count: cur.count - 1}));
    }
    
    render(){
        return <>
            <h3>{this.state.count}</h3>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
        </>;
    }
}

export default ClassComponentTest;

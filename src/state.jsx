import React from "react";

export default class State extends React.Component{
    /**
     * 组件中的状态:state
     * 
     */
    constructor(props) {
        super(props)
        this.state = {
            count: 10
        }
    }
    
    increment (){
        this.setState({
            count: this.state.count+=1
        })
    }
    decrement (){
        const that = this
        that.setState({
            count: that.state.count-=1
        })
    }
    clickHandler =() => {
        console.log(111)
    }
    render() {
        let showView = this.state.flag? '孙悟空': '猪八戒'
        return (
            <div>
                <h3>组件的state</h3>
                <p>{this.state.count}</p>
                <button onClick={() => this.increment()}>加1</button>
                <button onClick={this.decrement.bind(this)}>减1</button>
                <button onClick={this.clickHandler}>点击</button>
                <p>{showView}</p>
            </div>
        )
    }
}
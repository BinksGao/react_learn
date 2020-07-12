import React from 'react'
/**
 * componentWillmount 组件渲染之前执行
 * componentDidMount 组件渲染之后执行
 * shouldComponentUpdate 返回true和false true表示允许改变 false代表不允许改变
 * componentWillUpdate 数据在改变之前执行(state, props)
 * componentDidUpdate 数据修改完成
 * componentWillReceiveProps props发生改变执行
 * componentWillUnmount 组件卸载前执行
 */
export default class Life extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 10
        }
    }

    componentWillMount () {
        console.log('componentWillMount')
    }

    componentDidMount () {
        console.log('componentDidMount');
    }

    shouldComponentUpdate () {
        console.log('shouldComponentUpdate');
        return true 
    }

    componentWillUpdate () {
        console.log('componentWillUpdate'); 
    }

    componentDidUpdate () {
        console.log('componentDidUpdate');
    }

    componentWillReceiveProps () {
        console.log('componentWillReceiveProps');
    }

    componentWillUnmount () {
        console.log('componentWillUnmount')
    }
    
    handler = () => {
        const that = this
        that.setState({
            count: that.state.count+=1
        })
    }
    changeParent =() => {
        this.props.changeParent('来自子组件数据')
    }
    render() {
        let {count} = this.state
        return (
            <div>
                <p>{count}</p>
                <button onClick={this.handler}>加1</button>
                <p>{this.props.title}</p>
                <button onClick={this.changeParent}>修改父文本</button>

            </div>
        )
    }
}
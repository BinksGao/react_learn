import React from 'react';
import Home from './home'
import MyNav from './myNav'
import State from './state'
import Life from './life'
// 用类的形式创建组件
class App extends React.Component{
  constructor() {
    super()
    this.state = {
      title: '文本'
    }
  }
  changeTitle =() => {
    this.setState({
      title: '文本2'
    })
  }

  changeTitle2 =(data) => {
    this.setState({
      title: data
    })
  }
  render() {
    const nav1 = ['首页', '视频', '学习']
    const nav2 = ['web', 'Java', 'C++']

    return (
      <div>
        <h1>Hello React Component</h1>
        <h2>哈哈哈</h2>
        <Home />
        <MyNav nav={nav1} title="导航1"/>
        <MyNav nav={nav2} title="导航2"/>
        <State />
        <Life title={this.state.title} changeParent={this.changeTitle2}/>
        <button onClick={this.changeTitle} >修改子文本</button>
      </div>
    )
  }
}

export default App;

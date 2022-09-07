import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props){
        // hàm khởi tạo
        super(props)
        this.state = {
            color: 'green'
        }
    }
    
    componentWillUnmount(){
        // dùng để hủy
        // chạy thứ 3
    console.log('componentWillUnmount da chay');
    }
    componentDidMount(){
        // dùng call axios
        // componentDidMount chạy thu 2
        console.log('componentDidMout da chay');
    }
    componentWillMount(){
        // dùng trong trường hợp update
        // componentDidMount chạy đầu tiên
        console.log(' will mount da chay');
    }

  render() {
    console.log('render');
    return (
      <div>
        
        <button onClick={()=> this.setState({color: 'red'})}>
            submit
        </button>
        <p>{this.state.color}</p>
      </div>
    )
  }
}
